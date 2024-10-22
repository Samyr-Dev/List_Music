import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  musicForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private musicService: MusicService, private router: Router) { 
    this.musicForm = this.formBuilder.group({
      singer: ['', Validators.required],
      song: ['', Validators.required],
      genre: ['', Validators.required],
      registrationDate: ['', Validators.required], 
    });
  }

  onSubmit() {
    if (this.musicForm.valid) {
      const createMusic = this.musicForm.value;
      this.http.post('http://localhost:5000/api/music', createMusic).subscribe(
        response => {
          console.log('Música cadastrada com sucesso!', response);
  
          this.musicForm.reset();
          // Redirecionar para a rota de listagem após o cadastro
          this.router.navigate(['/list']);
        },
        error => {
          console.error('Erro ao cadastrar a música:', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}

