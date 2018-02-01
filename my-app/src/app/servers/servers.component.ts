import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverId = 10;
  serverStatus = 'offline';
  serverCreationStatus = 'No Server was Created';
  serverCreated = false;
  servers = ['Test Server 1','Test Server 2'];
  getServerStatus(){
      return this.serverStatus;
  }
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
  onUpdateServerName(event : Event){
    console.log(event); 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
