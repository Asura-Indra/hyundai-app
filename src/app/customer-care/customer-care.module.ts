import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCareRoutingModule } from './customer-care-routing.module';
import { CustomerCareComponent } from './customer-care.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { BookTestDriveComponent } from './book-test-drive/book-test-drive.component';
import { FormsModule } from '@angular/forms';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';


@NgModule({
  declarations: [
    CustomerCareComponent,
    SideBarComponent,
    OrdersComponent,
    BookTestDriveComponent,
    OrdersDetailsComponent,
    ],
  imports: [
    CommonModule,
    CustomerCareRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class CustomerCareModule { }
