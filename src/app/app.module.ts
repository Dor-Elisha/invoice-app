import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component'
import { EditInvoiceComponent } from './components/invoice/edit-invoice/edit-invoice.component'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
