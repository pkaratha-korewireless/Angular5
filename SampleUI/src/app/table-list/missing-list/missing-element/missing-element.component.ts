import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missing-element',
  templateUrl: './missing-element.component.html'
})
export class MissingElementComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  @Input()missingElement:{sno:string,gateway_datetime:string,server_datetime:string,normal_timeout:string,press_timeout:string,gatewayid:string,nodeid:string,nwid:string,nodetype:string,node_reg_flag:string,switch_status:string,die_removal_flag:string,suppliername:string,assypartnumber:string,partnumber:string,toolid:string,parttype:string,remarks:string,count:string,max_die_life:string,die_life:string,batterystatus:string,latitude:string,longitude:string,zone:string,zone_change_time:string,arming_state:string,die_state:string,mtbf:string,quality:string,failure_downtime:string,battery_notification:string,die_life_notification:string,die_missing_notification:string,die_removal_notification:string,reserved:string,endflag:string};
  @Input() globalopenflag;
  @Output() toolIdClickedMissing = new EventEmitter<{ toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string,battery:string,maxCount:string,vendor:string}>();
  onclickToolIdMissing() {
    this.toolIdClickedMissing.emit(
      {
        toolId: this.missingElement.toolid,
        count: this.missingElement.count,
        relatedPart: this.missingElement.partnumber,
        mtbFailure: this.missingElement.normal_timeout,
        quality: this.missingElement.quality,
        failureDTime: this.missingElement.failure_downtime,
        lat: this.missingElement.latitude,
        lng: this.missingElement.longitude,
        battery:this.missingElement.batterystatus,
        maxCount:this.missingElement.max_die_life,
        vendor:this.missingElement.suppliername
    });
    this.sidebarClicked = true;
  }
  getbarcolor() {
    return '#d8d8d8';
  }
  barPer() {
    let prodBarPercent = +this.missingElement.count / +this.missingElement.max_die_life * 100;
    return prodBarPercent + '%';
  }
  @Input() backColor;
  sidebarClicked;
}
