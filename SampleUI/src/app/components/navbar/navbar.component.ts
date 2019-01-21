import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiServices } from '../../services/api.services'
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location, private element: ElementRef, private apicall: ApiServices, private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
        this.bindNotification();
    }
    clearNotification
    notificationElement: { sno: string, gateway_datetime: string, server_datetime: string, normal_timeout: string, press_timeout: string, gatewayid: string, nodeid: string, nwid: string, nodetype: string, node_reg_flag: string, switch_status: string, die_removal_flag: string, suppliername: string, assypartnumber: string, partnumber: string, toolid: string, parttype: string, remarks: string, count: string, max_die_life: string, die_life: string, batterystatus: string, latitude: string, longitude: string, zone: string, zone_change_time: string, arming_state: string, die_state: string, mtbf: string, quality: string, failure_downtime: string, battery_notification: number, die_life_notification: number, die_missing_notification: number, die_removal_notification: number, reserved: string, endflag: string };
    notificationList: any[];
    notificationCount;
    readNotification(data: { type: number, toolid: string, partnumber: string, vendor: string, flag0: number, flag1: number, flag2: number, flag3: number }) {
        switch (data.type) {
            case 0:
                this.apicall.clearNotification(0, data.flag1, data.flag2, data.flag3, data.vendor, data.partnumber, data.toolid).subscribe(data => {
                });;
                break;  
            case 1:
                this.apicall.clearNotification(data.flag0, 0, data.flag2, data.flag3, data.vendor, data.partnumber, data.toolid).subscribe(data => {
                });;
                break;
            case 2:
                this.apicall.clearNotification(data.flag0, data.flag1, 0, data.flag3, data.vendor, data.partnumber, data.toolid).subscribe(data => {
                });;
                break;
            case 3:
                this.apicall.clearNotification(data.flag0, data.flag1, data.flag2, 0, data.vendor, data.partnumber, data.toolid).subscribe(data => {
                });
                break;
        }

    }
    username;
    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.username = localStorage.getItem('username')
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.bindNotification();
    }
    pollingData: any;
    bindNotification() {
        this.apicall.getNotification().subscribe(data => {
            this.notificationList = data['val'];
            this.notificationCount = 0;
            this.notificationList.forEach(element => {
                if (element['battery_notification'] == '1') {
                    this.notificationCount = this.notificationCount + 1;
                }
                if (element['die_life_notification'] == '1') {
                    this.notificationCount = this.notificationCount + 1;
                }
                if (element['die_missing_notification'] == '1') {
                    this.notificationCount = this.notificationCount + 1;
                }
                if (element['die_removal_notification'] == '1') {
                    this.notificationCount = this.notificationCount + 1;
                }
            });
        })
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    logout() {
        localStorage.removeItem('userLogin');
        location.reload();
        this.router.navigateByUrl('/');
    }
}
