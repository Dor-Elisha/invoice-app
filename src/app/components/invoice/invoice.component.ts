import { Component, OnInit , ViewChildren, ElementRef, QueryList , ViewChild, AfterViewChecked, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invoice } from '../../../assets/invoice';
import { fade, invoiceAni } from 'src/app/animation';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  styles: [],
  animations: [fade, invoiceAni]
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
  statusFilter!: string;

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
      this.statusFilter = 'all';
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
  filterInvoice(filterd:string ): void {
    if (filterd != 'all') {
      this.filterdInvoiceData = this.invoiceData.filter((invoice:any) =>
      invoice.status.toLowerCase().includes(filterd)
      )
    } else {
      this.filterdInvoiceData = this.invoiceData; 
    }
    this.statusFilter = filterd;
    setTimeout(()=> {
      this.toggleFilterMenu = false;
    }, 500)
  }
  NewInvoiceToggle(): void {
    this.addInvoice = !this.addInvoice;
  }
}
