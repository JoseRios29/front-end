import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private http: HttpClient, private router: Router) { }
  
  handleOption(option: string): void {
    switch (option) {
      case 'opcion1':
        this.router.navigateByUrl('/persona');
        break;
      case 'opcion2':
        console.log('Opción 2 seleccionada');
        break;
      case 'opcion3':
        console.log('Opción 3 seleccionada');
        break;
      case 'opcion4':
        console.log('Opción 4 seleccionada');
        break;
      default:
        console.log('Opción inválida');
        break;
    }
  }
}
