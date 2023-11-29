import { Component } from '@angular/core';
import { provincias } from 'src/app/interfaces/data';
import { Provincia } from 'src/app/interfaces/direccion.interface';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styles: [
  ]
})
export class AgregarSucursalComponent {
    public provincias: Provincia[] = provincias;

    public provinciaSelected: Provincia | undefined;
}
