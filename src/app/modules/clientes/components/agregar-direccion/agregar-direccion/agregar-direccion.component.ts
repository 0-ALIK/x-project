import { Component } from '@angular/core';
import { Provincia } from 'src/app/interfaces/direccion.interface';
import { provincias } from 'src/app/interfaces/data';
import { DireccionService } from 'src/app/services/direccion.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiClienteService } from 'src/app/services/api-cliente.service';

@Component({
  selector: 'app-agregar-direccion',
  template: `
  <form>

<div class="mb-2">
    <label class="block">Provincia</label>
    <p-dropdown
        [options]="provincias"
        [(ngModel)]="provinciaSelected"
        name="provinciaSelected"
        optionLabel="nombre"
        [showClear]="true"
        placeholder="Provincia...">
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

<p-button label="Agregar" (onClick)="agregarDireccion()"></p-button>

</form>

  `,


})
export class AgregarDireccionComponent {

    public provincias: Provincia[] = [];

    public provinciaSelected: Provincia | any;


    public nombre: any;
    public telefono: any;
    public id_cliente:any;
    public codigo_postal: any;
    public detalles: any

    constructor(
        public apiService: DireccionService,
        public provinciaService: ApiClienteService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ){

        this.id_cliente = this.config.data.id_cliente;
            console.log(this.id_cliente)


        this.provinciaService.getProvincias().subscribe((resp:any)=>{
            console.log(resp)
            this.provincias = resp
        })

    }


    public agregarDireccion(){
        console.log(this.provinciaSelected)

        const formData = new FormData();
        formData.append('provincia_id', this.provinciaSelected.id_provincia);
        formData.append('telefono', this.telefono);
        formData.append('codigo_postal', this.codigo_postal);
        formData.append('detalles', this.detalles);

        console.log(formData);



        //const formData = new FormData
        this.apiService.addDireccionCliente(this.id_cliente, formData).subscribe((resp:any)=>{
            window.location.reload()
        })

    }

}
