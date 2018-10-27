import { Component, OnInit } from '@angular/core';
import { Recursos } from '../recursos.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo'];
  dataSource: Recursos [] = [];

  constructor() {
  }

  ngOnInit() {
    for (let counter = 0; counter < 10; counter++) {
      this.dataSource.push({Nombre: 'Christian', Apellido: 'Cruz', Correo: 'christian.Cruz@polimentes.mx'});
    }
  }
}
// export interface Recursos {
//   nombre: string;
//   apellido: string;
//   correo: string;
// }
//
// const  : Recursos [] = [
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
//   { nombre: 'Christian', apellido: 'Cruz', correo: 'christian.Cruz@polimente.com'},
// ];
