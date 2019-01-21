import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  imageWhite: string;
  imageDull: string;
  iconFlag : boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', imageWhite: '../../../assets/img/icons/white-dashboard.svg', imageDull: '../../../assets/img/icons/dashboard-dull.svg',iconFlag : false },
  { path: '/die-part-details', title: 'Die/Part Details', icon: 'settings', class: '', imageWhite: '../../../assets/img/icons/dull-diedetails.svg', imageDull: '../../../assets/img/icons/dull-diedetails.svg',iconFlag : false },
  { path: '/user-profile', title: 'Register Devices', icon: 'playlist_add', class: '', imageWhite: '', imageDull: '',iconFlag : true }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
