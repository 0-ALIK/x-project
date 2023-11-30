import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categorias, marcas } from 'src/app/interfaces/data';
import { Categoria, Marca } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'alik-reporte-inventario',
    template: `
        <form class="flex flex-column" [formGroup]="form">

            <div>
                <label class="block">Marcas</label>
                <p-dropdown
                    formControlName="marca"
                    [options]="marcas"
                    optionLabel="nombre">
                    <ng-template let-marca pTemplate="item">
                        <div [style]="{'display': 'flex', 'alignItems': 'center', 'gap': 'var(--spacing-2)'}" >
                            <img [src]="marca.logo" style="width: 18px">
                            <div>{{ marca.nombre }}</div>
                        </div>
                    </ng-template>
                </p-dropdown>
            </div>

            <div>
                <label class="block">Categorias</label>
                <p-dropdown
                    formControlName="categoria"
                    [options]="categorias"
                    optionLabel="nombre">
                </p-dropdown>
            </div>
        </form>
    `,
})
export class ReporteInventarioComponent {

    public form: FormGroup = this.formBuilder.group({
        'marca': [],
        'categoria': []
    });

    public marcas: Marca[] = marcas;

    public categorias: Categoria[] = categorias;

    public constructor(
        private formBuilder: FormBuilder
    ) {}
}
