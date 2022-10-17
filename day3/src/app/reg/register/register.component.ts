import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  Sname:string="";
  Sage:number= 0;

 @Output() myEvent = new EventEmitter();
  addStd(e:any){
  //  let newStd:{name:String, age:Number} = {name: this.Sname, age: this.Sage};
    // console.log(newStd);
    this.myEvent.emit({name: this.Sname, age: this.Sage});
  }

}
