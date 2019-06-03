import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontpageLoaderService {
  data : Array<object>;

  constructor() 
  { 
    this.data = 
    [
      {
        name : "AC Hydralic",
        eventType : "1",
        date : "23-10-2019",
        startingTime : "14:00"
      },
      {
        name : "Blå mandag",
        eventType : "2",
        date : "24-10-2019",
        startingTime : "9:00"
      },
      {
        name : "EA Dania",
        eventType : "1",
        date : "25-10-2019",
        startingTime : "9:00"
      },
    ]
  }
}
