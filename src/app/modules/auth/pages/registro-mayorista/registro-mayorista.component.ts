import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
    currentFiles: File[];
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService]
})
export class RegistroMayoristaComponent {

    public form = this.formBuilder.group({
        'nombre': ['', Validators.required],
        'correo': ['', Validators.required],
        'pass': ['', Validators.required],
        'confirmPass': ['', [Validators.required, this.matchValues('pass')]],
        'ruc': ['', Validators.required],
        'telefono': ['', Validators.required],
    });

    public documento: File | undefined;

    public loading: boolean = false;

    public constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ) {}

    public enviarDatos(): void {
        this.loading = true;

        const formData = new FormData();

        formData.append('nombre', this.form.get('nombre')?.value || '');
        //formData.append('_method', '');
        formData.append('correo', this.form.get('correo')?.value || '');
        formData.append('pass', this.form.get('pass')?.value || '');
        formData.append('ruc', this.form.get('ruc')?.value || '');
        formData.append('telefono', this.form.get('telefono')?.value || '');

        if(this.documento)
            formData.append('documento', this.documento);

        this.authService.registro(formData).subscribe({
            next: (response) => {
                this.loading = false;

                const usuario = {
                    tipo: 'empresa',
                    data: response.data
                };

                localStorage.setItem('token', response.token);
                localStorage.setItem('usuario', JSON.stringify(usuario));

                this.router.navigate(['/app']);
            },

            error: () => {
                this.loading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error al registrar',
                    detail: 'Algo ha salido mal al realizar el registro, verifique la validez de sus datos'
                });
            }
        });

        this.form.reset();
        this.documento = undefined;
    }

    public selectFile( event: UploadEvent ): void {
        this.documento = event.currentFiles[0]
    }

    private matchValues(matchTo: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
          const forbidden = control.parent?.controls && control.value === control.parent?.get(matchTo)?.value;
          return forbidden ? null : { mismatch: true };
        };
    }
}
