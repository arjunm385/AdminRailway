import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private https: HttpClient) { }
  // public addTrain(train:any){
  //   return this.https.post(`${baseUrl}/train/add`,train);
  // }

}
