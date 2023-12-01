import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { categorias } from 'src/app/interfaces/data';
import { Categoria } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent implements OnInit {

    public value: string = '';

    public loading: boolean = false;

    public categorias: Categoria[] = categorias;

    public constructor(
        public ref: DynamicDialogRef
    ) {}

    public ngOnInit(): void {

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
