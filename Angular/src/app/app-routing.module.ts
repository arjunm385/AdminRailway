import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchtrainComponent } from './searchtrain/searchtrain.component';
import { TrainformComponent } from './trainform/trainform.component';

const routes: Routes = [

  {
    path:"train",
    component:TrainformComponent
  },
  {
    path:"searchtrain",
    component:SearchtrainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
