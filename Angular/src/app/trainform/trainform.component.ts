import { Component, OnInit } from '@angular/core';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-trainform',
  templateUrl: './trainform.component.html',
  styleUrls: ['./trainform.component.css']
})
export class TrainformComponent implements OnInit {

  constructor(private trainService:TrainService) { }
public train={
  tid:0,
  tno:'',
  tname:'',
  start:'',
  stop:'',
  date:'',
  totalCoach:'',
  acSleeperCoach:'',	 
	 acSittingCoach:'',	 
	 nonAcSleeperCoach:'',
	 nonAcSittingCoach:'',
	 totalAcSleeperSeat:'',	
	 availAcSleeperSeat:'',

	 totalAcSittingSeat:'',
	 
   availAcSittingSeat:'',
	 
   totalNonAcSleeperSeat:'',
	 
   availNonAcSleeperSeat:'',
	 
   totalNonAcSittingSeat:'',
	 
   availNonAcSittingSeat:''

}
  ngOnInit(): void {
  }

//from submit
formSubmit(){
  alert("sclicked")
  console.log(this.train)
  this.trainService.addTrain(this.train).subscribe(

    (data:any)=>{
      alert("submited")
      console.log(data);
    },
    (error:any)=>{
      alert("error")
      console.log(error);
    }
  );
  }
}
