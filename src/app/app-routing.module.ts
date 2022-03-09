import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RegisterPatientsComponent } from './modules/register-patients/pages/register-patients/register-patients.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'register-patient', component:RegisterPatientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
