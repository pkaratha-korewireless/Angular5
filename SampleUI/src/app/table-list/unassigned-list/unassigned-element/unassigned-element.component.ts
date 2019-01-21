import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unassigned-element',
  templateUrl: './unassigned-element.component.html'
})
export class UnassignedElementComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  @Input()unassignedElement:{sno:string,gateway_datetime:string,server_datetime:string,normal_timeout:string,press_timeout:string,gatewayid:string,nodeid:string,nwid:string,nodetype:string,node_reg_flag:string,switch_status:string,die_removal_flag:string,suppliername:string,assypartnumber:string,partnumber:string,toolid:string,parttype:string,remarks:string,count:string,max_die_life:string,die_life:string,batterystatus:string,latitude:string,longitude:string,zone:string,zone_change_time:string,arming_state:string,die_state:string,mtbf:string,quality:string,failure_downtime:string,battery_notification:string,die_life_notification:string,die_unassigned_notification:string,die_removal_notification:string,reserved:string,endflag:string};
  @Input() globalopenflag;
  @Output() toolIdClickedunassigned = new EventEmitter<{ toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string,battery:string,maxCount:string,vendor:string}>();
  onclickToolIdunassigned() {
    this.toolIdClickedunassigned.emit(
      {
        toolId: this.unassignedElement.toolid,
        count: this.unassignedElement.count,
        relatedPart: this.unassignedElement.partnumber,
        mtbFailure: this.unassignedElement.normal_timeout,
        quality: this.unassignedElement.quality,
        failureDTime: this.unassignedElement.failure_downtime,
        lat: this.unassignedElement.latitude,
        lng: this.unassignedElement.longitude,
        battery:this.unassignedElement.batterystatus,
        maxCount:this.unassignedElement.max_die_life,
        vendor:this.unassignedElement.suppliername
    });
    this.sidebarClicked = true;
  }
  getbarcolor() {
    return '#d8d8d8';
  }
  barPer() {
    let prodBarPercent = +this.unassignedElement.count / +this.unassignedElement.max_die_life * 100;
    return prodBarPercent + '%';
  }
  @Input() backColor;
  sidebarClicked;
}
