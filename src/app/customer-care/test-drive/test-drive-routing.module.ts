import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTestDriveComponent } from './book-test-drive/book-test-drive.component';
import { TestDriveComponent } from './test-drive.component';

const routes: Routes = [
  { path: '', component: TestDriveComponent },
{path:'book-test-drive', component:BookTestDriveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDriveRoutingModule { }
