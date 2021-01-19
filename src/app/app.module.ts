import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartiesComponent } from './parties/parties.component';
import { PartiesService } from './shared/services/parties.service';
import { DetailsPartyComponent } from './details-party/details-party.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PartiesComponent,
    DetailsPartyComponent,
    DoctorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PartiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
