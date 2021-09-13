import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrouteComponent } from './addroute/addroute.component';
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
  },
  {
    path:"addroute",
    component:AddrouteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
