import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const approutes:Routes=[
  {
    path:"",component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
