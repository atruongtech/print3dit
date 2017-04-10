import { Component, OnInit } from '@angular/core';
import { PrintsService, Print } from '../services/mockprints/mockprints.service';

@Component({
  selector: 'app-print-library',
  templateUrl: './print-library.component.html',
  styleUrls: ['./print-library.component.css'],
  providers: [PrintsService]
})
export class PrintLibraryComponent implements OnInit {

  allPrints: Print[];
  constructor(private printsService: PrintsService) { }

  ngOnInit() {
    this.allPrints = this.printsService.getPrints();
  }

}
