import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app.config'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ApiServices {
  constructor(private http: HttpClient) { }
  private serviceUrl = AppConfig.endpoints["atollEndpoint"];
  getProductionList() {
    return this.http.get(this.serviceUrl + "opcode=ATOP002&commcode=ATCC003&die_state=1");
  }
  getNumberOfevicesUnderProduction() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC002&die_state=1');
  }
  getFloorDetails(vendor, toolId, partNumber) {
    let query = 'commcode=ATCC007&opcode=ATOP002&suppliername=' + vendor + '&partnumber=' + partNumber + '&toolid=' + toolId
    return this.http.get(encodeURI(this.serviceUrl + query));
  }

  getNumberOfevicesUnderStorage() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC002&die_state=3');
  }
  getNumberOfevicesUnderRepair() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC002&die_state=4');
  }
  getNumberOfevicesUnderMissing() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC002&die_state=0');
  }
  getRepairList() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC003&die_state=4');
  }
  getStorageList() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC003&die_state=3');
  }
  getMissingList() {
    return this.http.get(this.serviceUrl + 'opcode=ATOP002&commcode=ATCC003&die_state=0');
  }
  getUnassignedList(){
    return this.http.get(this.serviceUrl + 'commcode=ATCC017&opcode=ATOP002');
  }
  getHistoryDay(vendorName, partNumber, toolId) {
    let query = this.serviceUrl + 'commcode=ATCC012&opcode=ATOP002&suppliername=' + vendorName + '&partnumber=' + partNumber + '&toolid=' + toolId
    return this.http.get(encodeURI(query));
  }
  getHistoryWeek(vendorName, partNumber, toolId) {
    let query = this.serviceUrl + 'commcode=ATCC013&opcode=ATOP002&suppliername=' + vendorName + '&partnumber=' + partNumber + '&toolid=' + toolId;
    return this.http.get(encodeURI(query));
  }
  getHistoryMonth(vendorName, partNumber, toolId) {
    let query = this.serviceUrl + 'commcode=ATCC014&opcode=ATOP002&suppliername=' + vendorName + '&partnumber=' + partNumber + '&toolid=' + toolId
    console.log('history call', query);
    return this.http.get(encodeURI(query));
  }
  getHistoryYear(vendorName, partNumber, toolId) {
    let query = this.serviceUrl + 'commcode=ATCC015&opcode=ATOP002&suppliername=' + vendorName + '&partnumber=' + partNumber + '&toolid=' + toolId
    return this.http.get(encodeURI(query));
  }
  getNotification() {
    //return this.http.get(this.serviceUrl+'commcode=ATCC011&opcode=ATOP002');
    return Observable.interval(5000).switchMap(() => this.http.get(this.serviceUrl + 'commcode=ATCC011&opcode=ATOP002'));
  }

  clearNotification(bat: number, die_life: number, die_miss: number, die_rem: number, suplier: string, partnumber: string, toolid: string) {
    let query = 'commcode=ATCC001&opcode=ATOP003&batt_notifi=' + bat + '&die_life_notifi=' + die_life + '&die_miss_notifi=' + die_miss + '&die_rem_notifi=' + die_rem + '&suppliername=' + suplier + '&partnumber=' + partnumber + '&toolid=' + toolid;
    return this.http.get(encodeURI(this.serviceUrl + query));

  }

  getAllCount() {
    let query = 'commcode=ATCC018&opcode=ATOP002&die_state1=1&die_state3=3&die_state4=4&die_state0=0&die_removal_flag=1';
    return this.http.get(encodeURI(this.serviceUrl + query));
  }
}