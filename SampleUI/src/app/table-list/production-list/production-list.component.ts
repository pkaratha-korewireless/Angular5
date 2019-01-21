import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../../services/api.services'
import { FilterUtils } from '../../lib/FilterUtils'
import { Chart } from 'angular-highcharts';
declare const $: any;

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html'
})
export class ProductionListComponent implements OnInit, OnChanges {

  constructor(private apicall: ApiServices, private filter: FilterUtils) {
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
  searchString = '';
  @Input() selectodPeriod;
  updatedprodList;
  @Output() prodtList;
  @Output() openSidebarGlobal = false;
  chart;
  chartCategories = [12, 12]
  ngOnInit() {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  interval;
  moduleInit() {
    this.apicall.getProductionList().subscribe(data => {
      if (this.searchString == '') {
        this.prodtList = data["val"];
        this.updatedprodList = this.prodtList;
      }
    });
  }
  @Output() sendDieDetails;

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
  //@Input() sortDateProd: string = 'Last 24 Hours';
  onSearchChangeToolId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['toolid'].toLowerCase().indexOf(searchValue) >= 0 || element['toolid'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
  onSearchChangePartNumber(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0 || element['partnumber'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
  onSearchChangeNodeId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['nodeid'].toLowerCase().indexOf(searchValue) >= 0 || element['nodeid'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
  onSearchChangeStatus(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['count'].toLowerCase().indexOf(searchValue) >= 0 || element['count'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
  onSearchChangevendorName(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['suppliername'].toLowerCase().indexOf(searchValue) >= 0 || element['suppliername'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
  onSearchChangeDate(searchValue: string) {
    this.searchString = searchValue;
    this.updatedprodList = [];
    this.prodtList.forEach(element => {
      if (element['server_datetime'].toLowerCase().indexOf(searchValue) >= 0 || element['server_datetime'].indexOf(searchValue) >= 0) {
        this.updatedprodList.push(element);
      }
    });
  }
}

