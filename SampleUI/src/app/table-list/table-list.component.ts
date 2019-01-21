import { Component, OnInit, Renderer2, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiServices } from '../services/api.services'
import { Router } from '@angular/router'
declare const $: any;
import { GlobalService } from '../services/index';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [GlobalService]
})
export class TableListComponent implements OnInit {

  constructor(private renderer: Renderer2, private apicall: ApiServices, private router: Router, public global: GlobalService) {
    if (localStorage.getItem('userLogin') == 'true') {
      //do nothing
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit() {
    console.log(localStorage.getItem('selectedTab'));
    if (localStorage.getItem('selectedTab') == 'Production') {
      this.change1(); 
      this.initdata();
    }
    else if (localStorage.getItem('selectedTab') == 'Storage') {
      document.getElementById('production').classList.remove('active');
      document.getElementById('storage').classList.add('active');
      
      this.change3(); 
      this.initdata();
    }
    else if (localStorage.getItem('selectedTab') == 'In Repair') {
      this.change2(); 
      this.initdata();
    }
    else if (localStorage.getItem('selectedTab') == 'Missing') {
      document.getElementById('production').classList.remove('active');
      console.log('classList',document.getElementById('production').classList)
      document.getElementById('missing').classList.add('active');
      this.change4(); 
      this.initdata();
    }
    else if (localStorage.getItem('selectedTab') == 'Unassigned') {
      this.change5(); 
      this.initdata();
    }
    else{
      this.change1(); 
      this.initdata();
    }
    
  }
  isRepairAdded = true;
  isStorageAdded = true;
  isProdAdded = true;
  isMissingAdded = true;
  selectedItemCount = this.global.totalproduction;
  buttonColor = "gray";
  changeProdColor(color: string) {
    const parent: HTMLElement = document.getElementById('itemprod');
    const child = parent.children[0];
    this.renderer.setStyle(child, 'background-color', color);
  }
  changeRepairColor(color: string) {
    const parent: HTMLElement = document.getElementById('itemrepair');
    const child = parent.children[0];
    this.renderer.setStyle(child, 'background-color', color);
  }
  changeStoreColor(color: string) {
    const parent: HTMLElement = document.getElementById('itemstore');
    const child = parent.children[0];
    this.renderer.setStyle(child, 'background-color', color);
  }
  changeMissingColor(color: string) {
    const parent: HTMLElement = document.getElementById('itemmissing');
    const child = parent.children[0];
    this.renderer.setStyle(child, 'background-color', color);
  }
  changeUnassignedColor(color: string) {
    const parent: HTMLElement = document.getElementById('itemunassigned');
    const child = parent.children[0];
    this.renderer.setStyle(child, 'background-color', color);
  }
  prodColor = '#DBE5ED';
  storecolor = '#FCECD1';
  repairColor = '#DBE5ED';
  missingColor = '#FCD9C8';
  unassColor = '#C6E1E4';
  change1() {
    this.changeProdColor('white');
    this.changeStoreColor('#F4F4F4');
    this.changeRepairColor('#F4F4F4');
    this.changeMissingColor('#F4F4F4');
    this.changeUnassignedColor('#F4F4F4');
    this.prodColor = '#074D80';
    this.storecolor = '#FCECD1';
    this.missingColor = '#FCD9C8';
    this.repairColor = '';
    this.unassColor = '#C6E1E4'
    this.selectedItemCount = this.global.totalproduction;
    this.selectedTab = 1;
  }
  change2() {
    this.changeRepairColor('white');
    this.changeProdColor('#F4F4F4');
    this.changeStoreColor('#F4F4F4');
    this.changeMissingColor('#F4F4F4');
    this.changeUnassignedColor('#F4F4F4');
    this.prodColor = '#DBE5ED';
    this.storecolor = '#F6AE2C';
    this.repairColor = '#86BBD8';
    this.missingColor = '#FCD9C8';
    this.unassColor = '#C6E1E4'
    this.selectedItemCount = this.global.totalRepair;
    this.selectedTab = 2;
  }
  change3() {
    this.changeStoreColor('white');
    this.changeProdColor('#F4F4F4');
    this.changeRepairColor('#F4F4F4');
    this.changeMissingColor('#F4F4F4');
    this.changeUnassignedColor('#F4F4F4');
    this.prodColor = '#DBE5ED';
    this.storecolor = '#F6AE2C';
    this.missingColor = '#FCD9C8';
    this.repairColor = '';
    this.unassColor = '#C6E1E4'
    this.selectedItemCount = this.global.totalStorage;
    this.selectedTab = 3;
  }
  change4() {
    this.changeMissingColor('white');
    this.changeProdColor('#F4F4F4');
    this.changeStoreColor('#F4F4F4');
    this.changeRepairColor('#F4F4F4');
    this.changeUnassignedColor('#F4F4F4');
    this.prodColor = '#DBE5ED';
    this.missingColor = '#F2641A';
    this.storecolor = '#FCECD1';
    this.unassColor = '#C6E1E4'
    this.selectedItemCount = this.global.totalMissing;
    this.selectedTab = 4;
  }
  change5() {
    this.changeUnassignedColor('white');
    this.changeProdColor('#F4F4F4');
    this.changeStoreColor('#F4F4F4');
    this.changeRepairColor('#F4F4F4');
    this.changeMissingColor('#F4F4F4');
    this.prodColor = '#DBE5ED';
    this.missingColor = '#FCD9C8';
    this.storecolor = '#FCECD1';
    this.unassColor = '#429EA6'
    this.selectedItemCount = this.global.totalunassigned;
    this.selectedTab = 5;
  }
  initdata() {
  }
  returnURL() {
    if (this.selectedTab == 1) {
      return '#production'
    }
    else if (this.selectedTab == 2) {
      return '#repair'
    }
    else if (this.selectedTab == 3) {
      return '#storage'
    }
    else {
      return '#production'
    }
  }
  selectedTab = 1;
  mapViewFlag = false;
  togleMapview() {
    if (this.mapViewFlag) {
      this.mapViewFlag = false;
      this.toggleButtonText = 'Table View';
    }
    else {
      this.mapViewFlag = true;
      this.toggleButtonText = 'Map View';
    }
  }

  toggleButtonText = 'Map View';
  @Output() periodSelected;
  selectSortPeridDropdown(item) {
    this.global.selectSortPeridDropdown(item);
    this.periodSelected = this.global.selectedPeriod;

  }
}
