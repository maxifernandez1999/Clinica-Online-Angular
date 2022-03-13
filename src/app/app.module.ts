import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { RegisterPatientsModule } from './modules/register-patients/register-patients.module';
import { RegisterSpecialistsModule } from './modules/register-specialists/register-specialists.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    RegisterPatientsModule,
    RegisterSpecialistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
