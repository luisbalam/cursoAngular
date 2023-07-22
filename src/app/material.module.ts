import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//lo que me dice material desing que se necesita importar!!!!! para el header
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// para el content
import {MatTabsModule} from '@angular/material/tabs';
// para el footer
import {NgFor} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatIconModule,  //cada uno de los modulos que se importó de material design (el nombre)
    MatButtonModule, // ""
    MatToolbarModule, // ""
    MatTabsModule, //modulo para el content
    MatChipsModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
