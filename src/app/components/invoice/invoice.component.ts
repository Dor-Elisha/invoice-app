import { Component, OnInit , ViewChildren, ElementRef, QueryList , ViewChild, AfterViewChecked, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invoice } from '../../../assets/invoice';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit {
  
  invoiceNum!: number;
  thereIsInvoice!: boolean;
  addInvoice!: boolean ;
  editInvoice!: boolean;
  @ViewChildren('invS') invS!: QueryList<ElementRef>;

  constructor(private http: HttpClient) {
    this.thereIsInvoice = false;
    this.addInvoice = false;
    this.editInvoice = false;
  }
  
  invoiceData!: any;
  
  ngOnInit(): void {

    this.http.get("assets/data.json").subscribe (data => {
      JSON.stringify(data)
      this.invoiceData = data;
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
 
  NewInvoiceToggle(): void {
    this.addInvoice = !this.addInvoice;
  }
}
