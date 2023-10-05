import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [


    MenuSideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuSideComponent


  ]
})
export class SharedModule { }
