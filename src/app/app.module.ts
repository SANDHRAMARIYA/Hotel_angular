import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"room",component:RoomComponent
  },
  {
path:"booking",component:BookingComponent
  },
  {
    path:"contact",component:ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RoomComponent,
    BookingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
