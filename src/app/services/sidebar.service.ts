import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Menu',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Principal', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Grafica', url: 'grafica1' },
      ],
    },
  ];

  constructor() {}
}
