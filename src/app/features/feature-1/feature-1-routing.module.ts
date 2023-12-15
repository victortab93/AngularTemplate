import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: Feature1IndexComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
