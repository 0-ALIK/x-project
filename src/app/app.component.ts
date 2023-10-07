import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title: string = 'x-proyect';

    public dark(): void {
        console.log('dark');
    }

    public light(): void {
        console.log('light');
    }
}
