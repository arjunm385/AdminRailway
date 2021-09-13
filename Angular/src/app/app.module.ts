import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainformComponent } from './trainform/trainform.component';
import { SearchtrainComponent } from './searchtrain/searchtrain.component';
import { AddrouteComponent } from './addroute/addroute.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainformComponent,
    SearchtrainComponent,
    AddrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
