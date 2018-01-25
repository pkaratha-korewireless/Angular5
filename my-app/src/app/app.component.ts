import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Me@Home';
  count = 0;
  clickAdd(){
    this.count = this.count+1;
  }
  clickSub(){
    this.count = this.count-1;
  }
}
