import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PrintersService, PrinterDetailView } from '../services/printers/printers.service';
import { ImagesService } from '../../common/services/images/images.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {
  app_user_id: number;

  editMode: boolean = false;
  createMode: Boolean = false;
  printer: PrinterDetailView;

  private imageHolder;


  constructor(private printersService: PrintersService
              ,private route: ActivatedRoute
              ,private router: Router
              ,private imagesService: ImagesService
              ,private element: ElementRef ) { }

  public formSubmission() {
    if (this.createMode) {
      this.createPrinter();
    }
    else {
      this.savePrinterEdit();
    }
  }
 
  public savePrinterEdit() {
    if (this.imageHolder) {
      this.uploadImage(innerRes => {
        Observable.zip(
          this.updateImagePath(innerRes, this.printer.PrinterId),
          this.printersService.updatePrinter(this.printer)
        )
        .subscribe(
          ([response, printer])=> this.router.navigate(['/printers','printerdetails', printer.PrinterId]),
          error => this.router.navigate(['/error'])
        );
      })
    }
    this.printersService.updatePrinter(this.printer)
        .subscribe(
          response => this.router.navigate(['/printers','printerdetails', response.PrinterId]),
          error => this.router.navigate(['/error'])
        );
  }

  public createPrinter() {
    this.printer.UserId = this.app_user_id;
    this.printersService.createPrinter(this.printer)
        .subscribe(
          printer => {
            this.uploadImage(innerRes => {
              this.updateImagePath(innerRes, printer.PrinterId)
                  .subscribe(
                    res => {
                      this.router.navigate(['/printers', 'printerdetails', printer.PrinterId]);
                    },
                    error => this.router.navigate(['/error'])
                  );
            })
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

  private updateImagePath(response, printerId) {
     if (response.status == 200) {
        this.printer.MainPrinterImageUrl = response.url;
        return this.imagesService.updateImagePath(null, printerId, response.url)
      } 
     else {
       this.router.navigate(['/error']);
       return;
     }
  }

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
        (data: {printer: PrinterDetailView}) => {
          this.printer = data.printer;
        },
      error => {
        console.log("error reached final destination"); 
        console.log(error); 
        this.router.navigate(['/error']);
      });

    this.route.url
      .subscribe(
        segments => {
          if (segments.join("").includes("edit")) { 
            this.editMode = true; 
          }
          else if (segments.join("").includes("create")) {
            this.printer = new PrinterDetailView();
            this.printer.MainPrinterImageUrl = "/assets/images/imageplaceholder.jpg";

            this.editMode = true;
            this.createMode = true;
          }
        },
        error => this.router.navigate(['/error'])
      );


  }

}
