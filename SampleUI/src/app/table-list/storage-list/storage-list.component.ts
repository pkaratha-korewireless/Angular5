import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../../services/api.services'
declare const $: any;

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html'
})
export class StorageListComponent implements OnInit, OnChanges {

  constructor(private apicall: ApiServices) {
    this.moduleInit();
    this.interval = setInterval(() => {
      this.moduleInit();;
    }, 5000);
  }
  interval;
  @Input() selectodPeriod;
  @Output() storageList;
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
    this.apicall.getStorageList().subscribe(data => {
      if (this.searchString == '') {
        this.storageList = data["val"];
        this.updatedStorageList = this.storageList;
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
  }
  closeSideWindow() {
    this.opensidebar = true;
  }
  updatedStorageList;
  opensidebar = true;
  onSearchChangeToolId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedStorageList = [];
    this.storageList.forEach(element => {
      if (element['toolid'].toLowerCase().indexOf(searchValue) >= 0 || element['toolid'].indexOf(searchValue) >= 0) {
        this.updatedStorageList.push(element);
      }
    });
  }
  onSearchChangePartNumber(searchValue: string) {
    this.searchString = searchValue;
    this.updatedStorageList = [];
    this.storageList.forEach(element => {
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0 || element['partnumber'].indexOf(searchValue) >= 0) {
        this.updatedStorageList.push(element);
      }
    });
  }
  onSearchChangeNodeId(searchValue: string) {
    this.searchString = searchValue;
    this.updatedStorageList = [];
    this.storageList.forEach(element => {
      if (element['nodeid'].toLowerCase().indexOf(searchValue) >= 0) {
        this.updatedStorageList.push(element);
      }
    });
  }
  onSearchChangeVendorName(searchValue: string) {
    this.searchString = searchValue;
    this.updatedStorageList = [];
    this.storageList.forEach(element => {
      if (element['suppliername'].toLowerCase().indexOf(searchValue) >= 0 || element['suppliername'].indexOf(searchValue) >= 0) {
        this.updatedStorageList.push(element);
      }
    });
  }
  onSearchChangeSpent(searchValue: string) {
    this.searchString = searchValue;
    this.updatedStorageList = [];
    this.storageList.forEach(element => {
      ////----calculation
      if (element['partnumber'].toLowerCase().indexOf(searchValue) >= 0) {
        this.updatedStorageList.push(element);
      }
    });
  }
}
