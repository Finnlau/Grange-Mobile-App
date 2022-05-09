import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentdeleteService {
  //Create url to the php
  url = 'http://localhost:8888/php/json-delete-student.php';

  //Inject HttpClient module into Constructor 
  constructor(private http: HttpClient) { }

  //Create deleteData() function thats make http post
  //request to delete a student. We use post instead of delet
  //because we are using basic php backed that required a 
  //StudnetID to delet the database record
  deleteData(data: any) {
    //Make http request using Http Client;
    alert(data);
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain'
      }),
      'responseType': 'text'
    });
  }
}
