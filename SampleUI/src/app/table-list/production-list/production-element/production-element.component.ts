import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DieDetailsComponent } from '../../../die-details/die-details.component'
import { } from '@types/googlemaps';
import { GoogleAPIService } from '../../../services/google-map.services'
import { Chart } from 'angular-highcharts';

import { ApiServices } from '../../../services/api.services'
import { ThrowStmt } from '@angular/compiler';
declare const $: any;
declare const google: any;
@Component({
  selector: 'app-production-element',
  templateUrl: './production-element.component.html',
  styleUrls: ['./production-element.component.css']
})
export class ProductionElementComponent implements OnInit, OnChanges {

  constructor(private googleAPIService: GoogleAPIService, private apicall: ApiServices) {
    //this.initmap();
  }
  prodBarPercent: number;
  getbarcolor() {
    return '#d8d8d8';
  }

  barPer() {
    let prodBarPercent = +this.prodElement.count / +this.prodElement.max_die_life * 100;
    return prodBarPercent + '%';
  }
  chart;
  chartValues = [];
  chartCategories = [];
  backgroundColor = 'white';
  getBackcolor() {
    return this.backgroundColor;
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  @Input() globalopenflag;
  @Output() toolIdClicked = new EventEmitter<{ toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string,battery:string,maxCount:string,vendor:string}>();
  onclickToolId() {
    this.toolIdClicked.emit(
      {
        toolId: this.prodElement.toolid,
        count: this.prodElement.count,
        relatedPart: this.prodElement.partnumber,
        mtbFailure: this.prodElement.normal_timeout,
        quality: this.prodElement.quality,
        failureDTime: this.prodElement.failure_downtime,
        lat: this.prodElement.latitude,
        lng: this.prodElement.longitude,
        battery:this.prodElement.batterystatus,
        maxCount:this.prodElement.max_die_life,
        vendor:this.prodElement.suppliername
        
    });
    this.sidebarClicked = true;
  }
  @Input() prodElement: { sno: string, gateway_datetime: string, server_datetime: string, normal_timeout: string, press_timeout: string, gatewayid: string, nodeid: string, nwid: string, nodetype: string, node_reg_flag: string, switch_status: string, die_removal_flag: string, suppliername: string, assypartnumber: string, partnumber: string, toolid: string, parttype: string, remarks: string, count: string, max_die_life: string, die_life: string, batterystatus: string, latitude: string, longitude: string, zone: string, arming_state: string, die_state: string, mtbf: string, quality: string, failure_downtime: string, reserved: string, endflag: string }
  
  viewDate = true;
  @Input() backColor;
  sidebarClicked;
}
