import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { provincias } from 'src/app/interfaces/data';
import { Provincia } from 'src/app/interfaces/direccion.interface';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styles: [
  ]
})
export class AgregarSucursalComponent {
    public provincias: Provincia[] = provincias;

    public provinciaSelected: Provincia | any;


    public telefono: any;
    public id_empresa: any;
    public codigo_postal: any;
    public descripcion: any;


    constructor(
        public apiService: ApiEmpresaService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ){}

    ngOnInit(): void {
        this.id_empresa = this.config.data.id_cliente;
    }

    agregarSucursal() {
        const formData = new FormData();
        formData.append('provincia', this.provinciaSelected );
        formData.append('telefono', this.telefono);
        formData.append('codigo_postal', this.codigo_postal);
        formData.append('descripcion', this.descripcion);
        formData.append('_method', 'PUT');




        //const formData = new FormData
        this.apiService.agregarColaborador(this.id_empresa, formData).subscribe((resp:any)=>{
            window.location.reload()
        })
        }
}
