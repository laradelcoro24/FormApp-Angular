import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'shared-menu-side',
  templateUrl: './menu-side.component.html',
  styles: [
  ]
})
export class MenuSideComponent {

  public reactiveMenu: MenuItem[]=[

    {title: 'Basicos', route: './reactive/basic'},
    {title: 'Dynamic', route: './reactive/dynamic'},
    {title: 'Switches', route: './reactive/switches'},


  ];
  public authMenu: MenuItem[]=[

    {title: 'Registro', route: './auth'}
  ];



}
