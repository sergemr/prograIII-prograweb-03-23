
import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class formularioComponent {
  nombre: string;
  apellido: string;
  correo: string;
  edad: number;
  identificacion: number;

  onSubmit() {
 
  }
}
