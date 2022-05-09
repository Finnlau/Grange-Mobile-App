import { Component, OnInit } from '@angular/core';
import { ExtraModule, ExtramoduleService } from '../services/extramodule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extramodule',
  templateUrl: './extramodule.page.html',
  styleUrls: ['./extramodule.page.scss'],
})
export class ExtramodulePage implements OnInit {

  constructor(private extramoduleService: ExtramoduleService) { }

  // Create extramodules property of type Observable
  extramodules: Observable<ExtraModule[]>;
  
  ngOnInit() {
    // Call the get extramodule function in the extramodule Service and
    // assign the Observable to the extra module property
    this.extramodules = this.extramoduleService.getExtraModules();
  }

}
