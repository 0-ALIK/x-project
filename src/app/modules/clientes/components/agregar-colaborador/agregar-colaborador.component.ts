import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';

@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styles: [
  ]
})
export class AgregarColaboradorComponent implements OnInit{

    public correo: String | any;
    public password: String | any;
    public nombre: String | any;
    public apellido: String | any;
    public telefono: String | any;
    public cedula: String | any;
    public genero: string = "M";
    public id_empresa: any;


    constructor(
        public apiService: ApiEmpresaService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ){}

    ngOnInit(): void {
        this.id_empresa = this.config.data.id_cliente;
    }
    agregarColaborador() {
        const formData = new FormData();
        formData.append('correo', this.correo );
        formData.append('password', this.password);
        formData.append('telefono', this.telefono)
        formData.append('nombre', this.nombre);
        formData.append('apellido', this.apellido);
        formData.append('cedula', this.cedula);
        formData.append('genero', this.genero);
        formData.append('_method', 'PUT');




        //const formData = new FormData
        this.apiService.agregarColaborador(this.id_empresa, formData).subscribe((resp:any)=>{
            console.log(formData)
            window.location.reload()
        })
        }
}
