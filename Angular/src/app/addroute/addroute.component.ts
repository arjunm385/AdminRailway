import { Component, OnInit } from '@angular/core';
import { routedetails } from '../model/routedetails';
import { traindetails } from '../model/traindetails';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {

  routeget:routedetails[]=[];

  public routedetails={
    routeid:'',
    startpoint:'',
    arrival:'',
    arrival1:'',
    depart:'',
    date:'',
    station:'',
    distance:0,   
    td:new traindetails
  }
  tempid:number=-1;
    ngOnInit(): void {
    }
  constructor(private trainService:TrainService) {}

  //from submit
  formSubmit(){
    alert("sclicked")
    console.log(this.routedetails)
    this.trainService.addRoute(this.routedetails).subscribe(
      (data:any)=>{
        // this.value=true;
        alert("submited")
        console.log(data);
      },
      (error:any)=>{
        alert("error")
        console.log(error);
      }
    );
    }

  async show(id:number){
  await new Promise(f => setTimeout(f, 3000));
  this.trainService.searchRoute(id).subscribe(
    (Response:any)=>{
      console.log(Response);
      this.routeget=Response;
    },
    (error:any)=>{
      alert(error);
    }
  )
}

  
}
