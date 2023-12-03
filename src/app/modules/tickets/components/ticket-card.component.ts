import { Component, Input, OnInit } from '@angular/core';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { TagsColorsService } from '../services/tags-colors.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, TagModule],
    providers: [TagsColorsService],
    selector: 'ticket-card',
    template: `
        <article
            class="w-full p-2 border-round cursor-pointer"
            [ngStyle]="{backgroundColor:'var(--highlight-bg)', color: 'var(--highlight-text-color)'}"
            [routerLink]="['/app/tickets', reclamo?.id_reclamo]">
            <div class="flex align-items-center justify-content-between mb-1">
                <p class="m-0">{{ reclamo?.categoria?.categoria }}</p>
                <p-tag
                    [value]="reclamo?.prioridad?.prioridad"
                    [severity]="tagsColorsService.getPriority(reclamo?.prioridad?.prioridad || '')">
                </p-tag>
            </div>

            <div class="mb-1">
                <p class="text-sm m-0">{{ reclamo?.descripcion }}</p>
            </div>

            <div class="flex align-items-center justify-content-between">
                <p-tag
                    [value]="reclamo?.estado?.estado"
                    [severity]="tagsColorsService.getSeverity(reclamo?.estado?.estado || '')">
                </p-tag>
                <p class="m-0">{{ reclamo?.fecha | date }}</p>
            </div>
        </article>
    `,
})
export class TicketCardComponent implements OnInit {

    @Input('reclamo')
    public reclamo: Reclamo | undefined;

    public constructor(
        public tagsColorsService: TagsColorsService
    ) {}

    ngOnInit(): void {
        this.reclamo
    }
}
