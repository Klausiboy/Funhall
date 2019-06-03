import { Component, OnInit } from '@angular/core';
import { FrontpageLoaderService } from './frontpage-loader.service';

@Component({
  selector: 'app-frontpage-view',
  templateUrl: './frontpage-view.component.html',
  styleUrls: ['./frontpage-view.component.css']
})
export class FrontpageViewComponent implements OnInit {
  title : string = "Events";
  data : Array<object>;

  constructor(loader : FrontpageLoaderService) 
  { 
    this.data = loader.data;
  }

  ngOnInit() {
  }

}
