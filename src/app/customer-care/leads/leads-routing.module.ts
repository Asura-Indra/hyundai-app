import { NewLeadComponent } from './new-lead/new-lead.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [{ path: '', component: LeadsComponent },
{path:'lead',component:LeadComponent},
{ path: 'new-lead', component: NewLeadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
