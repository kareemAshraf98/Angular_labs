import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formValidation = new FormGroup({
    name: new FormControl("",Validators.required),
    age:new FormControl(0,[Validators.min(20),Validators.max(40)]),
    email:new FormControl("",Validators.email)

  })
  get NameVald(){
    return this.formValidation.controls.name.valid;
  }
  get AgeVald(){
    return this.formValidation.controls.age.valid;
  }
  get EmailVald(){
    return this.formValidation.controls.email.valid;
  }

  data(){
    console.log(this.formValidation);
  }

}
