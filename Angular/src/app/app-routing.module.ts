import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainformComponent } from './trainform/trainform.component';

const routes: Routes = [
  {path:"train",component:TrainformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
