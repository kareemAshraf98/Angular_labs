import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule,Routes } from '@angular/router';

let routs:Routes = [
  {path:"",component:HomeComponent},
  {path:"users/:id",component:UserComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
