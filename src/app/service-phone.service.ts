import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicePhoneService {
  baseURL ="http://localhost:3000/phone-books";

  constructor(private myData:HttpClient) { }


  getUsers() :Observable<any>{
  return this.myData.get(`${this.baseURL}`)
  }


  postData(data: any): Observable<any> {
    return this.myData.post(`${this.baseURL}`, data)
  }


  updateData(data: any, id: string): Observable<any> {
    return this.myData.patch(`${this.baseURL}/${id}`, data)
  }


  deleteData(id: string): Observable<any> {
    return this.myData.delete(`${this.baseURL}/${id}`)
 }


 search(input:any){
  return this.myData.get(`${this.baseURL}/?filter={"where":{"name":{"regexp":"${input}"}}}`)

 }

 uniquePhone(input:any){
  return this.myData.get(`${this.baseURL}/?filter={"where":{"PhoneNumber":"${input}"}}`)

 }
  
}
