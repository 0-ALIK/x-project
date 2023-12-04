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
            header: 'John Doe',
            subheader: 'Coca-Cola',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Me encanta la nueva campaña publicitaria de Coca-Cola. ¡Refresca mi día!',
            footer: 5
        },
        {
            header: 'Jane Smith',
            subheader: 'Samsung',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'La última tecnología de Samsung es asombrosa. ¡Realmente innovadores!',
            footer: 4
        },
        {
            header: 'Alex Johnson',
            subheader: 'Apple Inc.',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Estoy enamorado de mi nuevo iPhone. La calidad de construcción es incomparable.',
            footer: 4
        },
        {
            header: 'Emily Davis',
            subheader: 'Google',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Google siempre simplifica mi vida. ¡Grandes servicios y productos!',
            footer: 3
        },
        {
            header: 'Michael Brown',
            subheader: 'Amazon',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Hago todas mis compras en Amazon. La entrega rápida y el servicio al cliente son geniales.',
            footer: 2
        },
        {
            header: 'Sophia Miller',
            subheader: 'Microsoft',
            image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
            content: 'Microsoft siempre supera mis expectativas. Excelentes productos y software.',
            footer: 4
        }
        // Puedes agregar más tarjetas según sea necesario
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

