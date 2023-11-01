import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-generar-ticket',
  templateUrl: './generar-ticket.component.html',
  styleUrls: ['./generar-ticket.component.css'],
  providers: [ MessageService ]
})
export class GenerarTicketComponent {
    ticketNumber: number = 12391;
    items: MenuItem[];
    detalleTicket: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel augue tristique, blandit leo nec, congue ex. Donec sit amet lorem nec neque dignissim varius. Etiam congue imperdiet orci, id tempor est porttitor sed. Sed mattis purus ut sapien suscipit condimentum. Donec vel velit sit amet neque mattis sodales ut molestie erat. ';

    data = [
    { fecha: '10/10/2023', cliente: 'May Medina', telefono: '244-4444' },

    ];

    public constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService) {
      this.items = [
        {
            label: 'Prioridad',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Alta',
                    icon: 'pi pi-fw pi-exclamation-triangle'
                },
                {
                    label: 'Media',
                    icon: 'pi pi-fw pi-info-circle'
                },
                {
                    label: 'Baja',
                    icon: 'pi pi-fw pi-info'
                }
            ]
        },
        {
            label: 'Estado',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Espera',
                    icon: 'pi pi-fw pi-clock'
                },
                {
                    label: 'Revisado',
                    icon: 'pi pi-fw pi-check'
                },
                {
                    label: 'Resuelto',
                    icon: 'pi pi-fw pi-check-circle',
                }
            ]
        },
    ];
}

  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe({
        next: ({id}) => {
            this.ticketNumber = id;
        }
    });
  }

  // public closeTicket(): void {
  //   console.log('Cerrar Ticket');
  // }

  // public changeStatus(): void {
  //   console.log('Cambiar Status');
  // }

}
