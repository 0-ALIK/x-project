import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { marcas } from 'src/app/interfaces/data';
import { Marca } from 'src/app/interfaces/producto.iterface';

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
        private router: Router
    ) { }

    public ngOnInit(): void {

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
