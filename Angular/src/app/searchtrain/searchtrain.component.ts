import { Component, OnInit } from '@angular/core';
import { routedetails } from '../model/routedetails';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-searchtrain',
  templateUrl: './searchtrain.component.html',
  styleUrls: ['./searchtrain.component.css']
})
export class SearchtrainComponent implements OnInit {

  constructor(private service:TrainService) { }
routedetails:routedetails[]=[];

public search={
  start:'',
 end:'',
 date:''
}
bool:boolean=true;
  ngOnInit(): void {
  }

  searchtrain(){
this.service.searchTrain(this.search).subscribe(
  (Response:any)=>{
    // this.bool=true
    console.log(Response)
    this.routedetails=Response
  },
  (err:any)=>{
    window.location.reload();
    alert("error")
  });
  }

}
