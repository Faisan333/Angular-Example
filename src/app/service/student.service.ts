import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  loadStudent(){
    return this.httpClient.get(baseUrl+'data')
  }
  postData(studentDetails:any){
    return this.httpClient.post(baseUrl+'data',studentDetails)
    }
}
