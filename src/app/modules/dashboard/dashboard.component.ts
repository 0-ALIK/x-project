import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `

        <alik-nav></alik-nav>
        <alik-sidebar></alik-sidebar>
        <main class="main">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [`

        .main {
            padding-top: calc( var(--nav-height) + var(--spacing-2) );
            padding-left: calc( var(--sidebar-width) + var(--spacing-2) );
            padding-botton: var(--spacing-2);
            padding-right: var(--spacing-2);
        }

        @media (max-width: 1023px) {
            .main {
                padding-left: var(--spacing-2);
            }
        }

    `]
})
export class DashboardComponent {

}

