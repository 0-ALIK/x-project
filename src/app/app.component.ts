import { Component, OnInit } from '@angular/core';
import { ThemesService } from './services/themes.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    public constructor(
        private themesService: ThemesService,
        private primeConfig: PrimeNGConfig,
    ) {}

    public ngOnInit(): void {
        this.primeConfig.setTranslation({
            'matchAll': 'Encontrar todos',
            'matchAny': 'Encontrar cualquiera',
            'startsWith': 'Empieza con',
            'contains': 'Contiene',
            'notContains': 'No contiene',
            'endsWith': 'Termina con',
            'equals': 'Es igual a',
            'notEquals': 'No es igual a'
        });
    }

    /**
     * Esta función permite aplica el último tema guardado en el localStorage
     * @returns Realiza un retorno para acabar con la función en caso de que no haya un tema guardado
     */
    private applySavedTheme(): void {
        const theme = localStorage.getItem('theme');

        if( !theme ) return;

        this.themesService.switchTheme(theme);
    }

}
