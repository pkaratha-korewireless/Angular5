import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../../services/api.services'
declare const $: any;

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html'
})
export class RepairListComponent implements OnInit, OnChanges {

  constructor(private apicall: ApiServices) {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  ngOnChanges() {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  @Output() repairList;
  updatedRepairList;
  interval;
  searchString = '';
  ngOnInit() {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  @Output() sendDieDetails;
  @Input() selectodPeriod;
  toolId;
  openSideWindow(data) {
    if(this.opensidebar == false){
      this.opensidebar =true;
    }
    this.opensidebar = false;
    this.toolId = data.toolId;
    this.sendDieDetails = data;
  }
  closeSideWindow() {
    this.opensidebar = true;
  }
  opensidebar = true;

  moduleInit() {
    this.apicall.getRepairList().subscribe(data => {
      if (this.searchString == '') {
        this.repairList = data["val"];
        this.updatedRepairList = this.repairList;
      }
    });
  }
  //@Input() sortDateRepair: string = 'Last 24 Hours';
  onSearchChangeToolId(searchValue: string) {
    this.updatedRepairList = [];
    this.repairList.forEach(element => {
      if (element['toolid'].toLowerCase().indexOf(searchValue) >= 0 || element['toolid'].indexOf(searchValue) >= 0) {
        this.updatedRepairList.push(element);
      }
    });
  }
  onSearchChangePartNumber(searchValue: string) {
    this.searchString = searchValue;
    this.updatedRepairList = [];
    this.repairList.forEach(element => {
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0 || element['partnumber'].indexOf(searchValue) >= 0) {
        this.updatedRepairList.push(element);
      }
    });
  }
  onSearchChangeNodeId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedRepairList = [];
    this.repairList.forEach(element => {
      if (element['nodeid'].toLowerCase().indexOf(searchValue) >= 0) {
        this.updatedRepairList.push(element);
      }
    });
  }
  onSearchChangeVendorName(searchValue: string) {
    this.searchString = searchValue;
    this.updatedRepairList = [];
    this.repairList.forEach(element => {
      if (element['suppliername'].toLowerCase().indexOf(searchValue) >= 0 || element['suppliername'].indexOf(searchValue) >= 0) {
        this.updatedRepairList.push(element);
      }
    });
  }
  onSearchChangeSpent(searchValue: string) {
    this.searchString = searchValue;
    this.updatedRepairList = [];
    this.repairList.forEach(element => {
      ////----calculation
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0) {
        this.updatedRepairList.push(element);
      }
    });
  }
}
