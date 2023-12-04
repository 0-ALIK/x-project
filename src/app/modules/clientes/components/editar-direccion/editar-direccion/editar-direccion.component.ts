import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Direccion, Provincia } from 'src/app/interfaces/direccion.interface';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-editar-direccion',
  template: `

  <form>
    <div class="mb-2">
        <label class="block">Direccion</label>
        <p-dropdown
            [options]="direcciones"
            name="direccionesSelected"
            [(ngModel)]="direccionSelected"
            optionLabel="provincia"
            [showClear]="true"
            (onChange)="obtenerDatos()"
            placeholder="Direccion...">
        </p-dropdown>
    </div>

    <div class="mb-2">
        <label class="block">Provincia</label>
        <p-dropdown
            [options]="provincias"
            [(ngModel)]="provinciaSelected"
            name="provinciaSelected"
            optionLabel="nombre"
            [showClear]="true">
        </p-dropdown>
    </div>


    <div class="mb-2">
        <label htmlFor="telefono" class="block">Telefono</label>
        <input pInputText name="telefono" [(ngModel)]="telefono" aria-describedby="username-help">
    </div>

    <div class="mb-2">
        <label htmlFor="code" class="block">Código postal</label>
        <input pInputText name="codigo_postal" [(ngModel)]="codigo_postal" aria-describedby="username-help">
    </div>

    <div class="mb-2">
        <label htmlFor="code" class="block">Detalles</label>
        <textarea rows="5" cols="30" pInputTextarea [autoResize]="true" name="detalles" [(ngModel)]="detalles"></textarea>
    </div>

    <p-button label="Editar" (onClick)="editarDireccion()"></p-button>

    </form>

  `
})

export class EditarDireccionComponent {

    formGroup: FormGroup | any;

    public direcciones: Direccion[] = [];

    public id_sucursal: any;

    public direccionSelected: Direccion | any;

    public provincias: Provincia[] = [];

    public provinciaSelected: Provincia | any;

    public telefono: any;
    public id_cliente: any;
    public codigo_postal: any;
    public detalles: any;
    public nombre: any;

    public editarDireccion(){



        const formData = new FormData();
        formData.append('provincia_id', this.provinciaSelected.id_provincia);
        formData.append('telefono', this.telefono);
        formData.append('codigo_postal', this.codigo_postal);
        formData.append('detalles', this.detalles);
        formData.append('_method','PUT')

        console.log(this.nombre);



        //const formData = new FormData
        this.empresaService.editarDireccion(this.id_sucursal, this.id_cliente, formData).subscribe((resp:any)=>{
            window.location.reload()
        })

    }

        constructor(
            public apiService: DireccionService,
            public empresaService: ApiEmpresaService,
            public config: DynamicDialogConfig,
            public provinciaService: ApiClienteService,
        ){

            this.id_cliente = this.config.data.id_empresa;
            this.direcciones = this.config.data.direcciones;
            //console.log(this.direcciones)

            this.provinciaService.getProvincias().subscribe((resp:any)=>{
                console.log(resp)
                this.provincias = resp
            })

        }

        public obtenerDatos(){
            if (this.direccionSelected) {
                const selectedDireccion = this.direcciones.find(d => d.provincia === this.direccionSelected.provincia);
                console.log(this.direccionSelected)
                this.id_sucursal = selectedDireccion?.id_direccion

                if (selectedDireccion) {
                    const idProvincia = this.provincias.find(p => p.nombre === selectedDireccion.provincia)?.id_provincia;
                    console.log(idProvincia);

                    this.provinciaSelected.id_provincia = idProvincia;
                    this.telefono = selectedDireccion.telefono;
                    this.codigo_postal = selectedDireccion.codigo_postal;
                    this.detalles = selectedDireccion.detalles;


                }
            }
        }

}

