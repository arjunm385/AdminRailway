import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private https: HttpClient) { }
  public addTrain(train:any){
    console.log(train)
    return this.https.post(`${baseUrl}/train/add`,train);
  }
  searchTrain(search:any){
    console.log("service layer"+search)
    return this.https.get(`http://localhost:8787/train/route/allbydateloc/`+search.start+`/`+search.end+`/`+search.date);
  }
}
