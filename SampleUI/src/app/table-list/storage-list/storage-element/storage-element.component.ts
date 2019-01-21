import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-storage-element',
  templateUrl: './storage-element.component.html'
})
export class StorageElementComponent implements OnInit {

  constructor(private datepipe: DatePipe) {
    //this.timeSpent = this.storageElement.zone_change_time;
   }
  timeSpent;
  ngOnInit() {
    //this.timeSpent = this.storageElement.zone_change_time;
    //this.storageElement.zone_change_time=this.datepipe.transform(this.storageElement.zone_change_time, 'yyyy-MM-dd')
    if(this.storageElement.zone_change_time == ''){
      this.timeSpent = 0 ;
    }
    else{
      this.timeSpent = (Math.abs(new Date().getTime() - new Date(this.storageElement.zone_change_time).getTime())/216000).toFixed(0)
    }
  }

  @Input() storageElement: { sno: string, gateway_datetime: string, server_datetime: string, normal_timeout: string, press_timeout: string, gatewayid: string, nodeid: string, nwid: string, nodetype: string, node_reg_flag: string, switch_status: string, die_removal_flag: string, suppliername: string, assypartnumber: string, partnumber: string, toolid: string, parttype: string, remarks: string, count: string, max_die_life: string, die_life: string, batterystatus: string, latitude: string, longitude: string, zone: string, arming_state: string, die_state: string, mtbf: string, quality: string, failure_downtime: string, reserved: string, endflag: string ,zone_change_time:string}
  @Output() toolIdClickedStorage = new EventEmitter<{ toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string,battery:string,maxCount:string,vendor:string}>();
  onclickToolIdStorage() {
    this.toolIdClickedStorage.emit(
      {
        toolId: this.storageElement.toolid,
        count: this.storageElement.count,
        relatedPart: this.storageElement.partnumber,
        mtbFailure: this.storageElement.normal_timeout,
        quality: this.storageElement.quality,
        failureDTime: this.storageElement.failure_downtime,
        lat: this.storageElement.latitude,
        lng: this.storageElement.longitude,
        battery:this.storageElement.batterystatus,
        maxCount:this.storageElement.max_die_life,
        vendor:this.storageElement.suppliername
    });
    this.sidebarClicked = true;
  } 
  sidebarClicked;
  @Input() backColor;
}
