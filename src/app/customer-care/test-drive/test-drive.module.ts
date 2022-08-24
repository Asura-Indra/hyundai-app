import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDriveRoutingModule } from './test-drive-routing.module';
import { TestDriveComponent } from './test-drive.component';
import { BookTestDriveComponent } from './book-test-drive/book-test-drive.component';


@NgModule({
  declarations: [
    TestDriveComponent,
    BookTestDriveComponent
  ],
  imports: [
    CommonModule,
    TestDriveRoutingModule,
    NgbModule
  ]
})
export class TestDriveModule { }
