import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverId = 10;
    serverStatus = 'online';
    getServerStatus(){
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > .5 ? 'online': 'offline';
    }
    getColor(){
       return this.serverStatus == 'online' ? 'green' : 'red';
    }
    userName = "Priyesh K";
    statuses : string[] =[];
    date = new Date().toDateString();
    updateStatus(){
        if(this.laststatus !=null){
            this.statuses.push(this.laststatus);
            this.laststatus = null;
        }
        else{
            alert("Please Enter Status..!!!");
        }
        
    };
    laststatus = null;
}