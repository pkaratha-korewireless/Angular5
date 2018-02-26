import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }
  Status:string;
  statuses:string []= ['hi','Hello','Test'];
  ngOnInit() {
  }
  onStatusUpdate(){
    this.statuses.push(this.Status)
  }

}
