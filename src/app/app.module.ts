import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './modules/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ //aqui van todos los componentes que quieras importar (solo un componente)
    AppComponent
  ],
  imports: [ //en el imports van los modulos (con todos sus componentes) que quieras importar
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule  // este contiene las clases que se usaran para hacer las peticiones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
