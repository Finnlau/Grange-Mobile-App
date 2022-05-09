import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Lecturer } from './lecturer';
import { lecturers } from './lecturers';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page{

  lecturers= lecturers;
  newLecturer= new Lecturer ();

  addLecturer(){
    this.lecturers.push(this.newLecturer);
    this.newLecturer = new Lecturer();
    console.log(this.lecturers);
  }
  constructor(private router: Router) {}

  openPage(lecturer: any){
    let navigationExtras: NavigationExtras = {
      state: {
        lecturer: lecturer
      }
    };
    this.router.navigate(['lecturerdetails'], navigationExtras);
  }
}

  