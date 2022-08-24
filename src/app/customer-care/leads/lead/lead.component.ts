import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  link()
  {
    this.Router.navigateByUrl("login/customer-care/book-test-drive")
  }


}
