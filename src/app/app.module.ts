import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import { CustomerCardComponent } from './component/customer-card/customer-card.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { MainComponent } from './component/main/main.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import { HeaderSComponent } from './component/header-s/header-s.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './component/footer/footer.component';
import { CustomersComponent } from './component/customers/customers.component';
import {AccordionModule} from 'primeng/accordion';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenubarModule} from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeImagesDDirective } from './directive/images/change-images-d.directive';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { AddCustomersComponent } from './component/add-customers/add-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    CustomerCardComponent,
    CustomerDetailsComponent,
    MainComponent,
    HeaderSComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    CustomersComponent,
    ChangeImagesDDirective,
    AddProductsComponent,
    AddCustomersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TabMenuModule,
    HttpClientModule,
    CardModule,
    MatCardModule,
    ButtonModule,
    AccordionModule,
    SlideMenuModule,
    MenubarModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
