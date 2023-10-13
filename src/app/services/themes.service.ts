import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

    public constructor(
        @Inject(DOCUMENT) private document: Document
    ) {}

    /**
     * Esta función te permite cambiar el tema de la aplicación
     * @param theme Este argumento es el nombre del tema a cambiar
     */
    public switchTheme(theme: string): void {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = theme + '.css';
            localStorage.setItem('theme', theme);
        }
    }
}
