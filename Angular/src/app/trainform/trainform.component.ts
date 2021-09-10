import { Component, OnInit } from '@angular/core';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-trainform',
  templateUrl: './trainform.component.html',
  styleUrls: ['./trainform.component.css']
})
export class TrainformComponent implements OnInit {

  constructor(private trainService:TrainService) { }
// public train={
//   tid:'',
//   tno:'',
//   tname:'',
//   start:'',
//   stop:'',
//   date:'',
//   totalCoach:'',
//   acSleeperCoach:'',	 
// 	 acSittingCoach:'',	 
// 	 nonAcSleeperCoach:'',
// 	 nonAcSittingCoach:'',
// 	 totalAcSleeperSeat:'',	
// 	 availAcSleeperSeat:'',

// 	 totalAcSittingSeat:'',
	 
//    availAcSittingSeat:'',
	 
//    totalNonAcSleeperSeat:'',
	 
//    availNonAcSleeperSeat:'',
	 
//    totalNonAcSittingSeat:'',
	 
//    availNonAcSittingSeat:'',

// }
  ngOnInit(): void {
  }
<<<<<<< HEAD
//from submit
=======
// //from submit
>>>>>>> 9af34c171a22c78c011f2fd47df08add0ccb28f2
// formSubmit(){
//   this.trainService.addTrain(this.train).subscribe(
//     (data:any)=>{
//       console.log(data);
//     },
//     (error:any)=>{
//       console.log(error);
//     }
//   );
//   }
}
