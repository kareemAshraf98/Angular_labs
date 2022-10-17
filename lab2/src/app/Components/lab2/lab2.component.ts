import { Component } from "@angular/core";
import { single } from "rxjs";

@Component({
    selector:"app-lab",
    templateUrl:"./lab2.component.html",
    styleUrls:["./lab2.component.css"]
})
export class Lab2Component{
  data:any;
  count:number =0;
  resetForm(){
    this.data = "";
  }


  images:any =["1.jpg","2.jpg","3.jpg","4.jpg"];
  image:any = "assets/Img/1.jpg";
  cl:any;
  slide = this.images[this.count];
  Next(){
    if(this.count <= this.slide.length-1){
      this.image = 'assets/Img/';
      this.count++;
      console.log(this.count);
      this.image += this.images[this.count];
      if(this.count == 4){
        this.image = 'assets/Img/4.jpg';
      }
      console.log(this.image);
    }
  }
  prev(){
    if(this.count < this.slide.length-1 ){
      this.image = 'assets/Img/';
      this.count--;
      console.log(this.count);
      this.image += this.images[this.count];
      if(this.count < 0){
        this.image = 'assets/Img/1.jpg';
      }
      // console.log(this.image);
    }
  }
  Slide(){
    this.cl = setInterval(()=>{
      this.image = 'assets/Img/';
      this.count++;
      this.image += this.images[this.count];
      if(this.count == 4){
        this.count = 0;
        console.log(this.count);
        this.image += this.images[this.count];
      }
      console.log(this.image);

    },700)
  }
  Stop(){
    clearInterval(this.cl);
  }

}
