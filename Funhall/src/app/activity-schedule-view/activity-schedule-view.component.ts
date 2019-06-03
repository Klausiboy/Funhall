import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-schedule-view',
  templateUrl: './activity-schedule-view.component.html',
  styleUrls: ['./activity-schedule-view.component.css']
})
export class ActivityScheduleViewComponent implements OnInit {

  matches : Array<object>;
  title : string = "Kampplan for ";

  constructor() 
  { 
    this.title += "kørestolsbasket" + ":";
    this.matches =[
      {
        team1: "red",
        team2: "blue",
        time: "13:00",
        id: "1"
      },
      {
        team1: "green",
        team2: "orange",
        time: "14:00",
        id: "2"
      },
      {
        team1: "yellow",
        team2: "darkgreen",
        time: "15:00",
        id: "3"
      },
      {
        team1: "black",
        team2: "redWhite",
        time: "16:00",
        id: "4"
      },
    ]
  }

  ngOnInit() {
  }

}
