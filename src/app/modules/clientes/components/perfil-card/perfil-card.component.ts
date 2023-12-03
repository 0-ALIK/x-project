import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
import { FileSelectEvent, FileUploadEvent } from 'primeng/fileupload';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
    currentFiles: File[];
}

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.css']
})

export class PerfilCardComponent implements OnInit{





    @Input("cliente")
    public cliente: any | undefined;


    @Input("empresa")
    public empresa: any | undefined;

    public idEmpresa: any | undefined;
    public idCliente: any | undefined;
    public selectedOption: String | any;
    public cedula: any;
    public fotoCliente: any;
    public correo: any;
    public apellido: any;
    public fotoEmpresa: any;
    public nombre: any;
    public ruc: any;
    public telefono: any;
    public razon_social: any;

    public genero: string = "M";

    public document: File | undefined;

    public datosEmpresa:Empresa[] =  [];
    public datosCliente:Cliente[] = [];

    public extenPerminitas: string[] = ['png', 'jpg'];

    constructor(
        private formBuilder: FormBuilder,
        public apiService: ApiEmpresaService,
        public activatedRoute: ActivatedRoute,
        public clienteService: ApiClienteService,
        private router: Router
    ){}

    public formEmpresa = this.formBuilder.group({
        'nombre': ['', Validators.required],
        'ruc': ['', Validators.required],
      });


    ngOnInit() {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {

                this.apiService.getDatosEmpresa(id).subscribe((resp:any)=>{
                    this.datosEmpresa = resp[0];
                    this.fillFormEmpresa(this.datosEmpresa)
                })

                this.clienteService.getDatosCliente(id).subscribe((resp:any)=>{
                    this.datosCliente = resp;
                    this.fillFormCliente(this.datosCliente)
                })
            }
        });
    }

    fillFormEmpresa(data: any): void {
        console.log(data)
        if (data) {
          this.idEmpresa = data.id_empresa;
          this.nombre = data.nombre;
          this.ruc = data.ruc;
          this.correo = data.correo;
          this.telefono = data.telefono;
          this.razon_social = data.razon_social;
          this.fotoEmpresa = data.foto
        }
    }

    fillFormCliente(data: any): void {
        console.log(data)
        if (data) {
          this.idCliente = data.id_cliente
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.correo = data.correo
          this.telefono = data.telefono;
          this.cedula = data.cedula
          this.fotoCliente = data.foto;
          this.selectedOption = data.genero
        }
    }

    public selectFile( event: UploadEvent ): void {
        this.document = event.currentFiles[0];
    }


    enviarDatosCliente(){

        const formData = new FormData();
        formData.append('nombre', this.nombre );
        formData.append('apellido', this.apellido );
        formData.append('telefono', this.telefono);
        formData.append('correo', this.correo);
        formData.append('genero',  this.selectedOption);
        if(this.document){
            formData.append('foto', this.document)
        }
        formData.append('_method', 'PUT');
        formData.append('cedula', this.cedula);



        //const formData = new FormData
        this.clienteService.editarDatosCliente(this.idCliente, formData).subscribe((resp:any)=>{
            window.location.reload()
        })

    }

    onOptionChange() {
        console.log( this.selectedOption);
      }



    enviarDatosEmpresa(){

        const formData = new FormData();
        formData.append('nombre', this.nombre );
        formData.append('ruc', this.ruc);
        formData.append('telefono', this.telefono)
        formData.append('razon_social', this.razon_social);
        formData.append('correo', this.correo);
        if(this.document){
            formData.append('foto', this.document)
        }
        formData.append('_method', 'PUT');



        //const formData = new FormData
        this.apiService.editarDatosEmpresa(this.idEmpresa, formData).subscribe((resp:any)=>{
            window.location.reload()
        })

    }

}


