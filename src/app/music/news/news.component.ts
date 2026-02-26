  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { HttpClient } from '@angular/common/http'; 
  import { ReactiveFormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';
  import { MusicService } from '../music.service';
  import { MatSnackBar } from '@angular/material/snack-bar'
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';

  @Component({
    selector: 'app-news',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './news.component.html',
    styleUrl: './news.component.css'
  })
  export class NewsComponent {
    musicForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private http: HttpClient, private musicService: MusicService, private router: Router, private snackBar: MatSnackBar) { 
      this.musicForm = this.formBuilder.group({
        singer: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        song: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        genre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        registrationDate: ['',], 
      });
    }

    onSubmit() {
      if (this.musicForm.valid) {
        const newMusic = this.musicForm.value;
        this.musicService.createMusic(newMusic).subscribe({
          next: (response) => {
            console.log('Música cadastrada com sucesso!', response);
            this.snackBar.open('Música cadastrada com sucesso!', 'Fechar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            this.musicForm.reset();
            this.router.navigate(['/list']);
          },
          error: (error) => {
            console.error('Erro ao cadastrar a música:', error);
            
            this.snackBar.open(error.error?.error , 'Fechar',{
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          },
          complete: () => {
            console.info('Cadastro de música completo');
          }
        });
      } else {
        // Marca todos os campos como tocados para ativar a validação
        this.musicForm.markAllAsTouched();
        console.log('Formulário inválido');
      }
    }    

    listMusics(): void {
      this.router.navigate(['/list']); // Redireciona para a rota /list
  }
  
  getErrorMessage(controlName: string): string {
    const control = this.musicForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório.';
    }
    if (control?.hasError('minlength')) {
      return `O mínimo de caracteres é ${control.errors?.['minlength'].requiredLength}.`;
    }
    if (control?.hasError('maxlength')) {
      return `O máximo de caracteres é ${control.errors?.['maxlength'].requiredLength}.`;
    }
    return '';
  }
}