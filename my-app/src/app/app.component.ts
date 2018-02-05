import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server Home';
  count = 0;
  clickAdd(){
    if(!isNaN(this.count)){
      this.count = Number(this.count)+1;
    }
    else{
      alert("Please Enter a number");
    }
  }
  clickSub(){
    if(!isNaN(this.count)){
      this.count = this.count-1;
    }
    else{
      alert("Please Enter a number");
    }
  }
}
