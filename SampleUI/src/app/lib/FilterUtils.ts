import { Injectable } from '@angular/core';

@Injectable()
export class FilterUtils {
  constructor() { }
  returnval =[];
  FilterProductionData(data:[{ toolId: string, partNumber: string, prodStatusCount: number, nodeId:number,vendorName: string, date: string, lat: number, lng: number }],type:string, value:string){
    data.forEach(element => {
      switch(type){
        case 'toolId':
            if(element.toolId == value){
              this.returnval.push(element);
            }
            break;
        case 'partNumber':
            if(element.partNumber == value){
              this.returnval.push(element);
            }
            break;
        case 'nodeId':
        if(element.nodeId.toString() == value){
              this.returnval.push(element);
            }
            break;
        case 'prodStatusCount':
        if(element.prodStatusCount.toString() == value){
              this.returnval.push(element);
            }
            break;
        case 'vendorName':
        if(element.vendorName == value){
              this.returnval.push(element);
            }
            break;
        case 'date':
        if(element.date == value){
              this.returnval.push(element);
            }
            break;
      }
      return this.returnval;
    });
  }
}