import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAdminGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);

    if(!localStorage.getItem('usuario') || !localStorage.getItem('token')) {
        router.navigate(['/auth']);
        return false;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario') || '');

    if(usuario.tipo === 'admin') {
        router.navigate(['/app']);
        return false;
    }

    return true;
};
