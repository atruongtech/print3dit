import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PrintersService, PrinterDetailView } from '../services/printers/printers.service';
import { ImagesService } from '../../common/services/images/images.service';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {
  private editMode: boolean = false;
  printer: PrinterDetailView;

  private imageHolder;


  constructor(private printersService: PrintersService
              ,private route: ActivatedRoute
              ,private router: Router
              ,private imagesService: ImagesService ) { }

  public savePrinterEdit() {
    console.log("button clicked");
    this.printersService.updatePrinter(this.printer).
      subscribe(
        response => this.router.navigate(['/printers','printerdetails', response.PrinterId]),
        error => this.router.navigate(['/error'])
      );
  }

  public holdImage(event) {
    this.imageHolder = event.srcElement.files[0];
  }

  public uploadImage() {
    this.imagesService.uploadImage(this.imageHolder)
        .subscribe(
          res => {
            res.subscribe(
              innerRes => {
                this.updateImagePath(innerRes);
                this.imageHolder = null;              
              }, 
              error => console.log(error)
              )
            }, 
          error => console.log(error)
          );
  }

  private updateImagePath(response) {
     if (response.status == 200) {
        this.printer.MainPrinterImageUrl = response.url;
        this.imagesService.updateImagePath(null, this.printer.PrinterId, response.url)
            .subscribe(
              res => console.log(res),
              error => console.log(error)
            )
      }     
  }

  ngOnInit() {
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
      .subscribe(segments => {if (segments.join("").includes("edit")) { this.editMode = true }})


  }

}
