import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {  NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbPaginationModule
  ]
})
export class OrdersModule { }
