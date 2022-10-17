import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  student:string[] = [];

  GetData(e: any){
    this.student.push(e);
    // console.log(e);

  }
}
