import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverCreated = false;
  servers = [];
  serverId:number=0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
    
  }
  serverName : string = '';
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated =true;
    this.serverCreationStatus = 'Server was Created';
    this.servers.push(this.serverName);
  }
  onRemoveServer(){
    this.serverCreated =false;
    this.serverCreationStatus = 'Server was Removed';
    this.servers.pop();
    this.serverName=null;
  }
  onUpdateServerName(event : Event){
    console.log(event); 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
