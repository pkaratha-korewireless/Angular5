import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { ApiServices } from '../services/api.services'
import { EventEmitter } from 'events';

@Injectable()
export class GlobalService {
  constructor(private apicall: ApiServices) {
    this.init();
  }
  activeTab = 'production';
  interval;
  dropdownChanged = new EventEmitter();
  public dropdownPeriods = ['Last 24 Hours', 'Last Week', 'Last Month', 'Last Year']
  public selectedPeriod = this.dropdownPeriods[0];
  selectSortPeridDropdown(period: string) {
    this.selectedPeriod = period;
  }
  totalCount = 0;
  totalproduction = 0;
  totalStorage = 0;
  totalRepair = 0;
  totalMissing = 0;
  totalunassigned = 0;
  prodPercent;
  storePercent;
  repPercent;
  missingPercent;
  unUsPercent;
  init() {
    this.apicall.getAllCount().subscribe(data => {
      console.log('Init all count :',data['val'][0]);
      this.totalMissing = data['val'][0]["Missing"];
      this.totalproduction = data['val'][0]["Production"];
      this.totalRepair = data['val'][0]["Repair"];
      this.totalStorage = data['val'][0]["Storage"];
      this.totalunassigned = data['val'][0]["Unassigned"];
      this.totalCount = + this.totalMissing + this.totalproduction + this.totalStorage +this.totalRepair +this.totalunassigned;
      this.prodPercent = (+ this.totalproduction / this.totalCount) * 100 + '%';
      this.storePercent = (+this.totalStorage / this.totalCount) * 100 + '%';
      this.missingPercent = (+this.totalMissing / this.totalCount) * 100 + '%';
      this.repPercent = (+this.totalRepair / this.totalCount) * 100 + '%';
      this.unUsPercent = (+this.totalunassigned / this.totalCount) * 100 + '%';
    });
  }
}