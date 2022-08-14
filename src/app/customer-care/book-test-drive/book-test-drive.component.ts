import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-test-drive',
  templateUrl: './book-test-drive.component.html',
  styleUrls: ['./book-test-drive.component.css']
})
export class BookTestDriveComponent implements OnInit {

  constructor(private calendar: NgbCalendar) { }

  date:any='';

  todayDate:any;

  testDrive_option={
    showroom: true,
    doorstep:false
  }

  ngOnInit(): void {
    this.todayDate=this.calendar.getToday();
    this.date=this.todayDate.day+'-'+this.todayDate.month+'-'+this.todayDate.year
  }

onDateSelection(date: NgbDate) {
this.date=date.day+'-'+date.month+'-'+date.year
  }

selectShowroom()
{
  if(this.testDrive_option.showroom!=true)
  {
    this.testDrive_option.showroom=true;
  this.testDrive_option.doorstep=false;
  }
}

selectdoorstep()
{
  if(this.testDrive_option.doorstep!=true)
  {
  this.testDrive_option.showroom=false;
  this.testDrive_option.doorstep=true;
  }
}


}
