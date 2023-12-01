import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categoria } from 'src/app/interfaces/producto.iterface';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent implements OnInit {

    public value: string = '';

    public loading: boolean = false;

    public categorias: Categoria[] | undefined;

    public constructor(
        public ref: DynamicDialogRef,
        private categoriaService: CategoriaService
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
        console.log(categoria);
    }

    public agregar(): void {
        this.loading = true;
        this.loading = false;
        this.cerrarDynamicDialog();
    }

    public cerrarDynamicDialog( categoria?: any ): void {
        this.ref.close( categoria );
    }

}
