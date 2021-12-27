import { Component, OnInit , ViewChildren, ElementRef, QueryList , ViewChild, AfterViewChecked, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invoice } from '../../../assets/invoice';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  styles: []
})
export class InvoiceComponent implements OnInit, AfterViewInit {
  
  invoiceNum!: number;
  thereIsInvoice!: boolean;
  addInvoice!: boolean ;
  editInvoice!: boolean;
  toggleFilterMenu: boolean = false;

  draftCheckBox: boolean = false;
  pendingCheckBox: boolean = false;
  paidCheckBox: boolean = false;

  @ViewChildren('invS') invS!: QueryList<ElementRef>;

  constructor(private http: HttpClient) {
    this.thereIsInvoice = false;
    this.addInvoice = false;
    this.editInvoice = false;
  }
  
  invoiceData!: any;
  filterdInvoiceData!: any;
  
  ngOnInit(): void {

    this.http.get("assets/data.json").subscribe (data => {
      JSON.stringify(data)
      this.invoiceData = data;
      this.filterdInvoiceData = this.invoiceData;
      this.invoiceNum = this.invoiceData.length;
      console.log(this.invoiceData);
      
      this.thereIsInvoice = true;
    })
  }

  ngAfterViewInit(): void {
  this.invS.changes.subscribe(res => {
    res.forEach((invoiceStatus: any) => {

      if ( invoiceStatus.nativeElement.textContent.toLowerCase() === "paid") {
        invoiceStatus.nativeElement.classList.add("paidBtn")
      } else if ( invoiceStatus.nativeElement.textContent.toLowerCase() === "pending") {
        invoiceStatus.nativeElement.classList.add("pendingBtn")
      } else {
        invoiceStatus.nativeElement.classList.add("draftBtn")
      }

    })    
  })

    
    
  }

  toggleFilter(): void {
    this.toggleFilterMenu = !this.toggleFilterMenu;
  }
  toggleDraft(): void {
    this.draftCheckBox = !this.draftCheckBox;
    console.log(this.draftCheckBox);
  }
  togglePending():void {
    this.pendingCheckBox = !this.pendingCheckBox;
    console.log(this.pendingCheckBox);
    
  }
  togglePaid():void {
    this.paidCheckBox = !this.paidCheckBox;
    console.log(this.paidCheckBox);
    
  }
  filterInvoice(filterd:string): void {
    console.log(filterd);
    
    
  }
  NewInvoiceToggle(): void {
    this.addInvoice = !this.addInvoice;
  }
}
