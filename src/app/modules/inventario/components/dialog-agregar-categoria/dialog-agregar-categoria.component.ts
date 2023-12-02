import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categoria } from 'src/app/interfaces/producto.iterface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent implements OnInit {

    public value: string | undefined;

    public loading: boolean = false;

    public categorias: Categoria[] | undefined;

    public constructor(
        public ref: DynamicDialogRef,
        private categoriaService: CategoriaService,
        private messageService: MessageService
    ) {}

    public ngOnInit(): void {
        this.categoriaService.getCategorias().subscribe(
            (categorias: any) => {
                this.categorias = categorias.data;
                console.log(this.categorias)
            },
            (error) => {
                console.error('Error al obtener los datos de las categorias', error);
            }
        );
    }

    public eliminarCategoria( categoria: Categoria ) {
        if (categoria && categoria.id_categoria) {
            this.categoriaService.deleteCategoria(categoria.id_categoria).subscribe(
                response => {
                    console.log('Marca eliminada con éxito.');
                    this.categorias = this.categorias?.filter(c => c.id_categoria !== categoria.id_categoria)
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Categoría eliminada con éxito.' });
                    this.cerrarDynamicDialog();
                },
                error => {
                    console.error('Error al eliminar la marca.', error);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la categoría' });
                    this.cerrarDynamicDialog();
                }
            );
        }
    }

    public agregar(): void {
        if (this.value) {
            this.loading = true;

            const formData: FormData = new FormData();
            formData.append('nombre', this.value)

            this.categoriaService.guardarCategorias(formData).subscribe(
                response => {
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha agregdado una nueva categoría.' });
                    this.loading = false;
                    this.cerrarDynamicDialog();
                },
                error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar la categoría' });
                    this.loading = false;
                    this.cerrarDynamicDialog();
                }
            );
        }
    }

    public cerrarDynamicDialog( categoria?: any ): void {
        this.ref.close( categoria );
    }

}
