import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainformComponent } from './trainform/trainform.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path:"train",
    component:TrainformComponent
  }
=======
  {path:"train",component:TrainformComponent}
>>>>>>> 9af34c171a22c78c011f2fd47df08add0ccb28f2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
