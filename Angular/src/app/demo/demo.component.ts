import { Component, OnInit } from '@angular/core';
import { SearchtrainComponent } from '../searchtrain/searchtrain.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
  source:any=localStorage.getItem("source");
  ngOnInit(): void {

  //  this.source= this.st.search.start

  }


}
