import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { marcas } from 'src/app/interfaces/data';
import { Marca } from 'src/app/interfaces/producto.iterface';
import { MarcasService} from 'src/app/services/marcas.service';

@Component({
    selector: 'app-dialog-ver-marcas',
    templateUrl: './dialog-ver-marcas.component.html',
    styleUrls: ['./dialog-ver-marcas.component.css']
})
export class DialogVerMarcasComponent {
    public value: string = '';

    public loading: boolean = false;

    public selectedMarca: Marca | undefined;

    public marcas: Marca[] = marcas;



    public constructor(
        public ref: DynamicDialogRef,
        private router: Router,
        private marcasService: MarcasService
    ) { }

    public ngOnInit(): void {
        this.marcasService.getMarcas().subscribe(
            (response: any) => {
                this.marcas = response.data;
                console.log(this.marcas)
            },
            (error) => {
                console.error('Error al obtener los datos de las marcas', error);
            }
        );
    }

    public editarMarca(marca: Marca) {
        if (marca && marca.id_marca) {
            this.router.navigate(['/app/inventario/editar-marca/', marca.id_marca]);
            this.cerrarDynamicDialog();
        }
    }


    public eliminarMarca(Marca: Marca) {
        console.log(Marca);
    }

    public agregar(): void {
        this.loading = true;
        this.loading = false;
        this.cerrarDynamicDialog();
    }

    public cerrarDynamicDialog(Marca?: any): void {
        this.ref.close(Marca);
    }

}
