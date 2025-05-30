import { BussinessService } from './../BussinessService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {
  isToShowNextStep = false;
  constructor(
    private readonly bussinessService: BussinessService
  ){ }

    ngOnInit() {
      this.start();
  }
  
   start() {
    this.isToShowNextStep = this.bussinessService.get();
  }
}
