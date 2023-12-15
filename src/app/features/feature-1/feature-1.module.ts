import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1IndexComponent } from './pages/index/index.component';
import { Feature1RoutingModule } from './feature-1-routing.module';
import { Feature1SearchAllComponent } from './pages/search-all/search-all.component';


@NgModule({
  declarations: [
    Feature1IndexComponent,
    Feature1SearchAllComponent
  ],
  imports: [
    CommonModule,    
    Feature1RoutingModule
  ]
})
export class Feature1Module { 

}
