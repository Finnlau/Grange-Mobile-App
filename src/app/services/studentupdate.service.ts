import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Student } from '../tab1/student';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentupdateService {
  //Create url to json-delete-student
  url = 'http://localhost:8888/php/json-update-student.php';

  //Inject HttpClient module into Constructor
  constructor(private http: HttpClient) { }

  //Create updateData() function thats make http post
  //request to delete a student. We use post instead of delete
  //because we are using a basic php backed that  required a
  //studentID to delete the database record
  updateData(data: any){
    //Make http request using Http Client;
    alert(data);
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text'
      }),
      'responseType': 'text'
    });
  }
}

