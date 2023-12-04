import { AfterViewInit, Component, Input } from '@angular/core';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';

@Component({
    selector: 'alik-card-direccion',
    templateUrl: './card-direccion.component.html'
})
export class CardDireccionComponent implements AfterViewInit {

    @Input('direccion')
    public direccion: any | undefined;

    @Input('fondo')
    public fondo: boolean = false;

    @Input('cliente')
    public cliente: any;

    constructor(
        public apiService: ApiEmpresaService,
    ){

    }
    ngAfterViewInit(): void {}

    public eliminarSucursal(id_direccion: any, id_empresa:any){

        this.apiService.eliminarSucursal(id_direccion,id_empresa).subscribe((resp:any)=>{
            window.location.reload()
        })
    }

    public eliminarDireccion(id_direccion: any, id_cliente:any){

        this.apiService.eliminarDireccion(id_direccion,id_cliente).subscribe((resp:any)=>{
            window.location.reload()
        })
    }

    public getProvincia(): string {
        if(typeof this.direccion?.provincia === 'object') {
            return this.direccion?.provincia.nombre;
        }

        return this.direccion?.provincia;
    }



}
