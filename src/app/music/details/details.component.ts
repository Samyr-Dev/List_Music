import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MusicService, Music } from '../music.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  music: Music | undefined;
  isEditing = false;
  musicForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.musicForm = this.fb.group({
      singer: [''],
      song: [''],
      genre: [''],
      registrationDate: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMusicDetails(id);
    }
  }

  // Função para obter os detalhes da música
  getMusicDetails(id: string): void {
    this.musicService.getMusicById(id).subscribe({
      next: (data) => {
        this.music = data;
        if (this.music) {
          this.musicForm.patchValue({
            singer: this.music.singer,
            song: this.music.song,
            genre: this.music.genre,
            registrationDate: this.music.registrationDate
          });
        }
      },
      error: (error) => {
        console.error('Erro ao obter os detalhes da música', error);
        this.snackBar.open('Erro ao obter os detalhes da música!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      complete: () => {
        console.info('Detalhes da música carregados com sucesso');
      }
    });
  }

  // Função para alternar o modo de edição
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  // Função para atualizar a música
  updateMusic(): void {
    if (this.music && this.music._id) {
      const updatedMusic = {
        ...this.musicForm.value
      };
  
      this.musicService.updateMusic(this.music._id, updatedMusic).subscribe({
        next: (updated) => {
          this.music = updated;
          this.toggleEdit(); 
          this.snackBar.open('Música atualizada com sucesso!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          console.error('Erro ao atualizar a música', error);
          this.snackBar.open('Erro ao atualizar a música!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        complete: () => {
          console.info('Atualização de música completa');
        }
      });
    }
  }

  goBackToList(): void {
    this.router.navigate(['/list']); // Navegar para a rota da lista de músicas
  }
}