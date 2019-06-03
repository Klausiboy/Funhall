import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdetails-view',
  templateUrl: './eventdetails-view.component.html',
  styleUrls: ['./eventdetails-view.component.css']
})
export class EventdetailsViewComponent implements OnInit {
  name : string;
  eventType : string;
  guests : number;
  teams : number;
  dateTimeStart : Date;
  dateTimeEnd : Date;
  activities : Array<string>;

  dateAsString : string;
  timeStartAsString : string;
  timeEndAsString : string;  
  tempMonth : Number;
  
  constructor() 
  {
    this.name = "temp name";
    this.eventType = "temp type";
    this.guests = 72;
    this.teams = 12; 
    this.dateTimeStart = new Date('2019-10-23 12:00');
    this.dateTimeEnd = new Date('2019-10-23 15:00');
    this.convertDateTimes();
    this.activities=[
      "Temp activity 1","Temp activity 2","Temp activity 3","Temp activity 4"
    ]
  }
  
  ngOnInit() {
  }
  
  convertDateTimes() {
    this.dateAsString = this.convertDateToString(this.dateTimeStart, "");
    this.timeStartAsString = this.convertTimeToString(this.dateTimeStart, "");
    this.timeEndAsString = this.convertTimeToString(this.dateTimeEnd, "");
  }
  
  convertDateToString(dateToConvert : Date, stringToSet : string) : string
  {
    //year-month-date
    stringToSet = dateToConvert.getFullYear() +"-";
    this.tempMonth = dateToConvert.getMonth()+1;
    if (this.tempMonth<10)
    {
      stringToSet += "0"+ this.tempMonth+"-";
    }
    else 
    {
      stringToSet += this.tempMonth+"-"
    }
    stringToSet += dateToConvert.getDate();
    return stringToSet;
  }
  
  convertTimeToString(timeToConvert : Date, stringToSet : string) : string
  {
    if (timeToConvert.getHours()==0)
    {
      stringToSet = "00" + ":";
    }
    else if (timeToConvert.getHours()<10)
    {
      stringToSet = "0" + timeToConvert.getHours() + ":";
    }
    else
    {
      stringToSet = "" + timeToConvert.getHours() + ":";
    }
    if (timeToConvert.getMinutes()==0)
    {
      stringToSet += "00";
    }
    else if (timeToConvert.getMinutes()>10)
    {
      stringToSet += "0" + timeToConvert.getMinutes();
    }
    else
    {
      stringToSet += timeToConvert.getMinutes();
    }
    return stringToSet
  }
}
