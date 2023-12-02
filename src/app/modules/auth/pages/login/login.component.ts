import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./position.css'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {

    public form = this.formBuilder.group({
        'correo': ['', [Validators.required, Validators.email]],
        'pass': ['', [Validators.required]],
        'recordar': ['']
    });

    public loading: boolean = false;

    public constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        const recordar = localStorage.getItem('recordar')
        if(!recordar) return;

        this.form.patchValue({
            'correo': recordar,
            'recordar': 'recordar'
        });
    }

    public enviarDatos(): void {
        const correo = this.form.get('correo')?.value || ''
        const pass = this.form.get('pass')?.value || ''
        const recordar = this.form.get('recordar')?.value || ''

        this.authService.login(correo, pass).subscribe({
            next: (response) => {
                this.loading = false;

                const usuarioData = {...response.usuario, ...response.dato_adicional};
                const usuario = {
                    tipo: response.usuario.rol,
                    data: usuarioData
                };

                console.log(usuario);

                localStorage.setItem('token', response.token);
                localStorage.setItem('usuario', JSON.stringify(usuario));
                if(recordar.length !== 0)
                    localStorage.setItem('recordar', usuario.data.correo);

                this.router.navigate(['/app']);
            },

            error: (error) => {
                console.log('xd: ', error);
                this.loading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error iniciar',
                    detail: 'Algo ha salido mal al realizar el registro, verifique la validez de sus datos'
                });
            }
        });

        this.form.reset();
    }

}
