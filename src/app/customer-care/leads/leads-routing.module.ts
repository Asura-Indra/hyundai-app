import { NewLeadComponent } from './new-lead/new-lead.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads.component';

const routes: Routes = [{ path: '', component: LeadsComponent },
{ path: 'new-lead', component: NewLeadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
