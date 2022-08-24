import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { BookTestDriveComponent } from './book-test-drive/book-test-drive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './customer-care.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{ path: '', component: CustomerCareComponent,
children:[
  { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
  { path: 'test-drive', loadChildren: () => import('./test-drive/test-drive.module').then(m => m.TestDriveModule) },
  {path:'orders', component:OrdersComponent},
  {path:'book-test-drive',component:BookTestDriveComponent},
  {path:'order-details', component:OrdersDetailsComponent},
  {path:'',pathMatch:'full',redirectTo:'leads'}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCareRoutingModule { }
