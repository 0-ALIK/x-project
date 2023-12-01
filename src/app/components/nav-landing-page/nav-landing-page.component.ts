import { Component, HostListener } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-nav-landing-page',
  templateUrl: './nav-landing-page.component.html',
  styleUrls: ['./nav-landing-page.component.css']
})
export class NavLandingPageComponent {
    isSunButtonVisible: boolean = true;

    public menuItems: String[] | undefined;

    sidebarVisible2: boolean = false;

    isSidebarButtonVisible: boolean = true;

    constructor(public themesService: ThemesService){}

    public ngOnInit(): void {
        this.rellenarMenuItem();
        this.updateVisibility();
    }

    private rellenarMenuItem(): void {
        this.menuItems = ['Tablas', 'Dashboard', 'Opiniones'];
      }

    // Método para cambiar el tema y alternar la visibilidad de los botones
    toggleThemeAndButtons(theme: string) {
      this.themesService.switchTheme(theme);
      this.isSunButtonVisible = !this.isSunButtonVisible;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
      this.updateVisibility();
    }

    updateVisibility(): void {
      // Cambia la visibilidad del botón del sidebar según el ancho de la pantalla
      this.isSidebarButtonVisible = window.innerWidth <= 1023;
    }

}
