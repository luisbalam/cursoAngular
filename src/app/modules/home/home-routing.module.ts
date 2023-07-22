import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NoteModule } from '../note/note.module';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:"", component:HomeComponent,
   children:[
    { path:"", component:ContentComponent},
    { path:"notes", loadChildren:()=>import("../note/note.module").then(m=>NoteModule)}
   ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
