import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MusicService, Music } from '../music.service';
import { CommonModule } from '@angular/common';

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
    private router: Router
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
    this.musicService.getMusicById(id).subscribe(data => {
      this.music = data;
      if (this.music) {
        this.musicForm.patchValue({
          singer: this.music.singer,
          song: this.music.song,
          genre: this.music.genre,
          registrationDate: this.music.registrationDate
        });
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

      this.musicService.updateMusic(this.music._id, updatedMusic).subscribe(updated => {
        this.music = updated;
        this.toggleEdit();
        alert('Música atualizada com sucesso!');
      });
    }
  }

  goBackToList(): void {
    this.router.navigate(['/list']); // Navegar para a rota da lista de músicas
  }
}