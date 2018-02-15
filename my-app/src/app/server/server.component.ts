import {Component,Input} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverStatus = '';
    statuses : string[] =[];
    laststatus = null;
    @Input() id: number;
    getServerStatus(){
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > .5 ? 'online': 'offline';
    }
    getColor(){
       return this.serverStatus == 'online' ? 'linear-gradient(#97EE67, #0EEF65)' : 'linear-gradient(#F15151, #FA0A0E)';
    }
}