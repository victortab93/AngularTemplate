import { NgModule } from '@angular/core';
import { HomeComponent } from '../../shared/home/home.component';
import { GeneralComponentsModule } from '../components/general-components.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GeneralComponentsModule,
    RouterOutlet
  ]
})
export class HomeModule { }
