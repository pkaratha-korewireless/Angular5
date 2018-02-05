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
       return this.serverStatus == 'online' ? 'linear-gradient(black, #d2eff2)' : 'linear-gradient(black,#f1d1d7)';
    }
}