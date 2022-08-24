import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCareRoutingModule } from './customer-care-routing.module';
import { CustomerCareComponent } from './customer-care.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerCareComponent,
    SideBarComponent,
    ],
  imports: [
    CommonModule,
    CustomerCareRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class CustomerCareModule { }
