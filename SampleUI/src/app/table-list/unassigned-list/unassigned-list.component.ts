import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../../services/api.services'
declare const $: any;
@Component({
  selector: 'app-unassigned-list',
  templateUrl: './unassigned-list.component.html'
})
export class UnassignedListComponent implements OnInit, OnChanges {

  constructor(private apicall: ApiServices) {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  @Input() selectodPeriod;
  interval;
  @Output() unassignedList;
  @Output() openSidebarGlobal = false;
  updatedunassignedList;
  ngOnInit() {
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
  moduleInit() {
    this.apicall.getUnassignedList().subscribe(data => {
      console.log('data',data);
      if (this.searchString == '') {
        this.unassignedList = data["val"];
        this.updatedunassignedList = this.unassignedList;
      }
    });
  }
  @Output() sendDieDetails;
  searchString = '';
  toolId;
  openSideWindow(data) {
    if (this.opensidebar == false) {
      this.opensidebar = true;
    }
    this.opensidebar = false;
    this.toolId = data.toolId;
    this.sendDieDetails = data;
    this.openSidebarGlobal = true;
  }
  closeSideWindow() {
    this.opensidebar = true;
    this.openSidebarGlobal = false;
  }
  opensidebar = true;

  @Input() sortDateunassigned: string = 'Last 24 Hours';
  onSearchChangeToolId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['toolid'].toLowerCase().indexOf(searchValue) >= 0 || element['toolid'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }
  onSearchChangePartNumber(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0 || element['partnumber'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }
  onSearchChangeNodeId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['nodeid'].toLowerCase().indexOf(searchValue) >= 0 || element['nodeid'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }
  onSearchChangeStatus(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['count'].toLowerCase().indexOf(searchValue) >= 0 || element['count'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }
  onSearchChangevendorName(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['suppliername'].toLowerCase().indexOf(searchValue) >= 0 || element['suppliername'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }

  onSearchChangeDate(searchValue: string) {
    this.searchString = searchValue;
    this.updatedunassignedList = [];
    this.unassignedList.forEach(element => {
      if (element['server_datetime'].toLowerCase().indexOf(searchValue) >= 0 || element['server_datetime'].indexOf(searchValue) >= 0) {
        this.updatedunassignedList.push(element);
      }
    });
  }
}
