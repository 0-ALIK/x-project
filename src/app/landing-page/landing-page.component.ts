import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    public tablas: string[] | any;

    public dashboard: string[] | any;

    ngOnInit(): void {
        this.rellenarImgTablas();
        this.rellenarImgDashboard();
    }

    private rellenarImgTablas(): void {
        this.tablas = ['tabla-inventario', 'tabla-clientes', 'tabla-tickets', 'tabla-ventas'];
    }

    private rellenarImgDashboard(): void {
        this.dashboard = ['dashboard-1', 'dashboard-2', 'dashboard-3', 'dashboard-4'];
    }

    public cardsData: any[] = [
        {
            header: 'Card 1 Header',
            subheader: 'Card 1 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 1',
            footer: 'Valoración 1'
        },
        {
            header: 'Card 2 Header',
            subheader: 'Card 2 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 2',
            footer: 'Valoración 2'
        },
        {
            header: 'Card 3 Header',
            subheader: 'Card 3 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 3',
            footer: 'Valoración 3'
        },
        {
            header: 'Card 4 Header',
            subheader: 'Card 4 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 4',
            footer: 'Valoración 4'
        },
        {
            header: 'Card 5 Header',
            subheader: 'Card 5 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 5',
            footer: 'Valoración 5'
        },
        {
            header: 'Card 6 Header',
            subheader: 'Card 6 Subheader',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Contenido de la tarjeta 6',
            footer: 'Valoración 6'
        },
        // Agrega más tarjetas según sea necesario
    ];

    public responsiveOptions: any[] = [
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '810px',
            numVisible: 1,
            numScroll: 1
        }
    ];

}

