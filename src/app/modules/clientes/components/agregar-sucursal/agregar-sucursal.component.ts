import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AngleUpIcon } from 'primeng/icons/angleup';
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
    public detalles: any;
    public nombre: any;


    constructor(
        public apiService: ApiEmpresaService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ){

            this.id_empresa = this.config.data.id_empresa;
            console.log(this.id_empresa)

    }

    ngOnInit(): void {


    }

    agregarSucursal() {

        const formData = new FormData();
        formData.append('nombre',this.nombre);
        formData.append('provincia_id', '2');
        formData.append('telefono', this.telefono);
        formData.append('codigo_postal', this.codigo_postal);
        formData.append('detalles', this.detalles);

        console.log(formData);



        //const formData = new FormData
        this.apiService.agregarSucursal(this.id_empresa, formData).subscribe((resp:any)=>{
            window.location.reload()
        })
        }
}
