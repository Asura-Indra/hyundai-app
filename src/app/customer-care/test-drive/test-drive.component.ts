import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.css']
})
export class TestDriveComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  link()
  {
    this.Router.navigateByUrl("login/customer-care/book-test-drive")
  }


}
