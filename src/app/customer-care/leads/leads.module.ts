import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewLeadComponent } from './new-lead/new-lead.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { LeadComponent } from './lead/lead.component';


@NgModule({
  declarations: [
    LeadsComponent,
    NewLeadComponent,
    LeadComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    NgbModule
  ]
})
export class LeadsModule { }
