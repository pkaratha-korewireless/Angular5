import { Component, OnInit, Output } from '@angular/core';
import { ApiServices } from '../services/api.services'
import { Router, ActivatedRoute } from '@angular/router';
declare const $: any;
import { GlobalService } from '../services/index';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GlobalService]
})
export class DashboardComponent implements OnInit {

  constructor(private apicall: ApiServices, private router: Router, public global: GlobalService) {
    
    localStorage.setItem('selectedTab','Production');
    if (localStorage.getItem('userLogin') == 'true') {
      this.init();
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }
  @Output() selectedOut;
  UpdateTab(data) {
    console.log('Emitting', data.target.textContent);
    localStorage.setItem('selectedTab', data.target.textContent);
  }
  storageAddedValue = 3;
  prodAddedValue = 5;
  repairAddedValue = 10;
  isRepairAdded = true;
  isStorageAdded = true;
  isProdAdded = true;

  circle1;
  circle2;
  ngOnInit() {
    this.init()
  }
  init() {
    this.circle1 = this.calculateStrokeValue(80, 100);
    this.circle2 = this.calculateStrokeValue(50, 100);

  }
  radius = 54;
  totalFill = 124
  calculateStrokeValue(value: number, total: number) {
    return ({ dasharray: this.totalFill * (value / total), dashoffset: this.totalFill - (this.totalFill * (value / total)) });
  }
  setTab(val: string) {
    this.global.activeTab = val;
  }
}
