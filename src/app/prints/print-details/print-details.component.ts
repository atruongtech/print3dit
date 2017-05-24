import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/zip';

import { PrintsService, PrintDetailView, PrinterPrintsView, FilamentPrintsView } from '../services/prints/prints.service';
import { ImagesService } from '../../common/services/images/images.service';

@Component({
  selector: 'app-print-details',
  templateUrl: './print-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './print-details.component.css']
})
export class PrintDetailsComponent implements OnInit {
  app_user_id: number;

  print: PrintDetailView;
  printTimeMinutes: number;
  printTimeHours: number;

  printerOptions: PrinterPrintsView[];
  selectedPrinter: PrinterPrintsView;

  filamentOptions: FilamentPrintsView[];
  selectedFilament: FilamentPrintsView;

  showDelete: Boolean = false;

  editMode: Boolean = false;
  createMode: Boolean = false;
  imagePreview;
  imageHolder;

  constructor(private route: ActivatedRoute
              ,private router: Router
              ,private printsService: PrintsService
              ,private imagesService: ImagesService
              ,private element: ElementRef) { }

  public formSubmission() {
    if (this.createMode) {
      this.createPrint();
    }
    else {
      this.savePrintUpdate();
    }
  }


  public createPrint() {
    this.prepPrintForSubmit();

    this.printsService.createPrint(this.print)
        .subscribe(
          print => {
            this.uploadImage(innerRes => {
              this.updateImagePath(innerRes, print.PrintId)
                  .subscribe(
                    res => {
                      this.router.navigate(['/prints', 'printdetails', print.PrintId]);
                    },
                    error => this.router.navigate(['/error'])
                  );
            })
          }
        )
  }

  public savePrintUpdate() {
    this.prepPrintForSubmit();    

    if (this.imageHolder) {
      this.uploadImage(innerRes => {
        Observable.zip(
          this.updateImagePath(innerRes, this.print.PrintId),
          this.printsService.updatePrint(this.print)
        )
        .subscribe(
          ([res,print]) => this.router.navigate(['/prints','printdetails',print.PrintId]),
          error => this.router.navigate(['/error'])
        )
      })
    }
    else {
      this.printsService.updatePrint(this.print)
        .subscribe(
          print => this.router.navigate(['/prints','printdetails',print.PrintId]),
          error => this.router.navigate(['/error'])
        )
    }    
  }

  public deletePrint() {
    this.printsService.deletePrint(this.print)
        .subscribe(
          nDeletes => {
            console.log("Deleted " + nDeletes + " prints.");
            this.router.navigate(['/prints']);
          },
          error => {
            console.error(error);
            this.router.navigate(['/error']);
          }
        )
  }

  public holdImage(event) {
    this.imageHolder = event.srcElement.files[0];
    var reader = new FileReader();
    let element = this.element;

    reader.onload = function (e) {
        let target:any = e.target;
        var image = element.nativeElement.querySelector('.image-placeholder');
        image.src = target.result;
    }

    reader.readAsDataURL(this.imageHolder);
  }

  private prepPrintForSubmit() {
    this.print.FilamentId = this.selectedFilament.FilamentId;
    this.print.PrinterId = this.selectedPrinter.PrinterId;
    this.print.PrintTimeMinutes = (this.printTimeHours * 60) + this.printTimeMinutes;

    // set user ID for creation, and is okay if it's set on edit as well.    
    this.print.UserId = this.app_user_id;    
  }

  private uploadImage(callback: (innerRes: any) => any) {
    this.imagesService.uploadImage(this.imageHolder)
        .subscribe(
          res => {
            res.subscribe(
              innerRes => {
                callback(innerRes);
              }, 
              error => console.log(error)
              )
            }, 
          error => console.log(error)
          );
  }

  private updateImagePath(response, printId) {
     if (response.status == 200) {
        this.print.MainPrintImageUrl = response.url;
        return this.imagesService.updateImagePath(printId, null, response.url)            
      }
      else {
        this.router.navigate(['/error']);
        return;    
      }       
  }

  private loadFilamentAndPrinterOptions() {
    this.printsService.getFilamentOptions(this.app_user_id)
        .subscribe(
          filaments => {
            this.filamentOptions = filaments;
            this.selectedFilament = filaments.find(filament => filament.FilamentId == this.print.FilamentId)
          },
          error => this.router.navigate(['/error'])
        );
    this.printsService.getPrinterOptions(this.app_user_id)
        .subscribe(
          printers => {
            this.printerOptions = printers;
            this.selectedPrinter = printers.find(printer => printer.PrinterId == this.print.PrinterId)
          },
          error => this.router.navigate(['/error'])
        )
}

  // Interface implementations
  ngOnInit() {
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }
    else {
      console.error("Application user ID not set.");
      this.router.navigate(['/error']);
    }

    this.route.data
      .subscribe(
        (data: {print: PrintDetailView}) => {
          this.print = data.print;
          if (this.print) {
            this.printTimeMinutes = this.print.PrintTimeMinutes % 60;
            this.printTimeHours = Math.floor(this.print.PrintTimeMinutes / 60);
          }
        },
      error => {console.log("error reached final destination"); console.log(error); this.router.navigate(['/error']);});

    this.route.url
      .subscribe(
        segments => {
          if (segments.join("").includes("edit")) {
            if (this.app_user_id != this.print.UserId) {
              this.router.navigate(['/404']);
              return;
            } 
            this.editMode = true;
            this.loadFilamentAndPrinterOptions();            
          }
          else if (segments.join("").includes("create")) {
            this.print = new PrintDetailView();
            this.print.MainPrintImageUrl = "assets/images/imageplaceholder.jpg";

            this.editMode = true;
            this.createMode = true;
            this.loadFilamentAndPrinterOptions();
          }
        });
  }

}
