import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { provincias } from 'src/app/interfaces/data';
import { Provincia } from 'src/app/interfaces/direccion.interface';

@Component({
    selector: 'alik-reporte-cliente',
    template: `
        <form class="flex flex-column" [formGroup]="form">
            <div>
                <label class="block">Provincias</label>
                <p-dropdown
                    formControlName="provincia"
                    [options]="provincias"
                    optionLabel="nombre">
                </p-dropdown>
            </div>

            <div>
                <label class="block">Genero</label>
                <div class="flex flex-wrap gap-3">
                    <div class="flex align-items-center">
                        <p-radioButton
                            formControlName="genero"
                            value="M"
                            inputId="genero1">
                        </p-radioButton>
                        <label for="genero1" class="ml-2">Mujeres</label>
                    </div>
                    <div class="flex align-items-center">
                        <p-radioButton
                            formControlName="genero"
                            value="H"
                            inputId="genero2">
                        </p-radioButton>
                        <label for="genero2" class="ml-2">Hombres</label>
                    </div>
                </div>
            </div>
        </form>
    `,
})

export class ReporteClienteComponent {

    public form: FormGroup = this.formBuilder.group({
        'provincia': [],
        'genero': []
    });

    public provincias: Provincia[] = provincias;

    public constructor(
        private formBuilder: FormBuilder
    ) {}

}
