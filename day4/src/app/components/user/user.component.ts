import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Id =0;
  constructor(errorSnap:ActivatedRoute) {
    this.Id = errorSnap.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
