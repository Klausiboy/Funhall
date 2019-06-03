import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title : string;
  data : Array<object>;
  content : string;

  constructor(private testService : TestService) 
  { 
    this.title = testService.title;
    this.content = testService.content;
    this.data = testService.data;
  }

  ngOnInit() {
  }

}
