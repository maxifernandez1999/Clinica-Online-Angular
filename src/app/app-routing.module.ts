import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RegisterPatientsComponent } from './modules/register-patients/pages/register-patients/register-patients.component';
import { RegisterSpecialistsComponent } from './modules/register-specialists/pages/register-specialists/register-specialists.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'register-patient', component:RegisterPatientsComponent },
  { path: 'register-specialist', component:RegisterSpecialistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
