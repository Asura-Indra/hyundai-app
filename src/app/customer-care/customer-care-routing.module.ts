import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './customer-care.component';

const routes: Routes = [{ path: '', component: CustomerCareComponent,
children:[
  { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
  { path: 'test-drive', loadChildren: () => import('./test-drive/test-drive.module').then(m => m.TestDriveModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'',pathMatch:'full',redirectTo:'leads'},
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCareRoutingModule { }
