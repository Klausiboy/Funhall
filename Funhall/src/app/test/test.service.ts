import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  title : string = "test";
  content : string = `<h1>${this.title}</h1>
  <p> Dette er en test>/p>
  `
  data : Array<object> =[
    {
      name : "Klaus",
      description : "mig, studerende"
    },
    {
      name : "Klaus",
      description : "ikke mig, underviser"
    }
  ]

  constructor() { }
}
