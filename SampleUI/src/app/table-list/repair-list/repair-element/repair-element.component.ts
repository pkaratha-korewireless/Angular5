import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repair-element',
  templateUrl: './repair-element.component.html'
})
export class RepairElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Math.abs(new Date().getTime() - new Date(this.repairElement.zone_change_time).getTime());
  }
  @Input() repairElement : {sno:string,gateway_datetime:string,server_datetime:string,normal_timeout:string,press_timeout:string,gatewayid:string,nodeid:string,nwid:string,nodetype:string,node_reg_flag:string,switch_status:string,die_removal_flag:string,suppliername:string,assypartnumber:string,partnumber:string,toolid:string,parttype:string,remarks:string,count:string,max_die_life:string,die_life:string,batterystatus:string,latitude:string,longitude:string,zone:string,zone_change_time:string,arming_state:string,die_state:string,mtbf:string,quality:string,failure_downtime:string,battery_notification:string,die_life_notification:string,die_missing_notification:string,die_removal_notification:string,reserved:string,endflag:string}
  
  timeSpent;

  @Output() toolIdClickedRepair = new EventEmitter<{ toolId: string, count: string, relatedPart: string, mtbFailure: string, quality: string, failureDTime: string, lat: string, lng: string,battery:string,maxCount:string,vendor:string}>();
  onclickToolIdRepair() {
    this.toolIdClickedRepair.emit(
      {
        toolId: this.repairElement.toolid,
        count: this.repairElement.count,
        relatedPart: this.repairElement.partnumber,
        mtbFailure: this.repairElement.normal_timeout,
        quality: this.repairElement.quality,
        failureDTime: this.repairElement.failure_downtime,
        lat: this.repairElement.latitude,
        lng: this.repairElement.longitude,
        battery:this.repairElement.batterystatus,
        maxCount:this.repairElement.max_die_life,
        vendor:this.repairElement.suppliername
    });
  }
  @Input() backColor;
}
