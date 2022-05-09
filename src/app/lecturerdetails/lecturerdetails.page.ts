import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lecturerdetails',
  templateUrl: './lecturerdetails.page.html',
  styleUrls: ['./lecturerdetails.page.scss'],
})
export class LecturerdetailsPage implements OnInit {

  lecturer: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.lecturer = this.router.getCurrentNavigation().extras.state.lecturer;
      console.log(this.lecturer);
      }
    });
  }
  ngOnInit() {
  }
}
