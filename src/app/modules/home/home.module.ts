import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeaderButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
