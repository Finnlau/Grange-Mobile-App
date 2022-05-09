import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moduledetails',
  templateUrl: './moduledetails.page.html',
  styleUrls: ['./moduledetails.page.scss'],
})
export class ModuledetailsPage implements OnInit {

  module: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.module = this.router.getCurrentNavigation().extras.state.module;
      console.log(this.module);
      }
    });
  }
  ngOnInit() {
  }

}
