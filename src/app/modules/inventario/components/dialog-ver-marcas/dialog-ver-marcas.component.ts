import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { MarcasService} from 'src/app/services/marcas.service';
import { Marca } from 'src/app/interfaces/producto.iterface';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-dialog-ver-marcas',
    templateUrl: './dialog-ver-marcas.component.html',
    styleUrls: ['./dialog-ver-marcas.component.css']
})
export class DialogVerMarcasComponent {
    public value: string = '';

    public loading: boolean = false;

    public selectedMarca: Marca | undefined;

    public marcas: Marca[] | undefined;



    public constructor(
        public ref: DynamicDialogRef,
        private router: Router,
        private marcasService: MarcasService,
        private activatedRoute: ActivatedRoute,
        private messageService: MessageService
    ) { }

    public ngOnInit(): void {
        this.marcasService.getMarcas().subscribe(
            (marcas: any) => {
                this.marcas = marcas.data;
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


    public eliminarMarca(marca: Marca) {
        if (marca && marca.id_marca) {
            this.marcasService.deleteMarca(marca.id_marca).subscribe(
                response => {
                    console.log('Marca eliminada con éxito.');
                    this.marcas = this.marcas?.filter(m => m.id_marca !== marca.id_marca)
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Marca eliminada con éxito.' });
                },
                error => {
                    console.error('Error al eliminar la marca.', error);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la marca' });
                }
            );
        }
        // this.activatedRoute.params.subscribe({
        //     next: ({id}) => {
        //         this.marcasService.deleteMarca(Number(id)).subscribe(
        //             (response: any) => {
        //                 console.log(marca.id_marca)
        //                 this.marcas = this.marcas?.filter(m => m.id_marca !== marca.id_marca);
        //                 this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Marca eliminada con éxito.' });
        //             },
        //             error => {
        //                 this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la marca' });
        //             }
        //         );
        //     }
        // });
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
