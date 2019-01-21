import { Component, OnInit, Input } from '@angular/core';
import { ApiServices } from '../services/api.services'
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;
import {GlobalService} from '../services/index';
@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html'
})
export class CircularProgressComponent implements OnInit {

  constructor() {
  }

  circle;
  ngOnInit() {
    this.init()
  }
  init() {
    this.circle = this.calculateStrokeValue(50, 100);
  }
  totalFill = 34
  calculateStrokeValue(value: number, total: number) {
    this.val1 = (((value/total))*this.totalFill) +'vw';
  }
  val1;
  val2;
  @Input() title;
  @Input() subtitle;
}
