import { Component } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';
import { MenuItem } from 'src/app/interfaces/menu-item.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

    isSunButtonVisible: boolean = true;

    public menuItems: String[] | undefined;

    constructor(public themesService: ThemesService){}

    public ngOnInit(): void {
        this.rellenarMenuItem();
    }

    private rellenarMenuItem(): void {
        this.menuItems = ['Inventario', 'Ventas', 'Clientes', 'Usuarios', 'Analítica'];
      }

    // Método para cambiar el tema y alternar la visibilidad de los botones
    toggleThemeAndButtons(theme: string) {
      this.themesService.switchTheme(theme);
      this.isSunButtonVisible = !this.isSunButtonVisible;
    }

}
