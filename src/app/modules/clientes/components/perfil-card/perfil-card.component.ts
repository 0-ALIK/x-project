import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
import { FileUploadEvent } from 'primeng/fileupload';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';


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

    public uploadedFiles: File[] = [];

    public datosEmpresa:Empresa[] =  [];
    public datosCliente:Cliente[] = [];

    public extenPerminitas: string[] = ['png', 'jpg'];

    constructor(
        private formBuilder: FormBuilder,
        public apiService: ApiEmpresaService,
        public activatedRoute: ActivatedRoute,
        public clienteService: ApiClienteService
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
          this.nombre = data.nombre;
          this.ruc = data.ruc;
          this.telefono = data.telefono;
          this.razon_social = data.razon_social;
          this.fotoEmpresa = data.foto
        }
    }

    fillFormCliente(data: any): void {
        console.log(data)
        if (data) {
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.telefono = data.telefono;
          this.cedula = data.cedula
          this.fotoCliente = data.foto;
        }
    }

    public onUpload(event: FileUploadEvent) {

        for(let file of event.files) {

            const partes = file.name.split('.');
            const extension = partes[ partes.length - 1 ].toLowerCase();
            console.log(extension);

            if( this.extenPerminitas.includes( extension ) )
                this.uploadedFiles.push(file);
        }
    }



    enviarDatosCliente(idCliente:any){

        this.clienteService.editarDatosCliente(idCliente, this.nombre, this.apellido, this.ruc, this.telefono, this.fotoCliente).subscribe((resp:any)=>{
        console.log(resp);

            })
    }

    enviarDatosEmpresa(id_empresa:any){

        console.log(this.razon_social)
        this.apiService.editarDatosEmpresa(id_empresa, this.nombre, this.ruc, this.telefono, this.correo, this.fotoEmpresa).subscribe((resp:any)=>{
        console.log(resp);

        })

    }

}


