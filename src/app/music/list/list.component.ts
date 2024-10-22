import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MusicService } from '../music.service'; // Certifique-se de importar o serviço

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  musicList: any[] = []; 
  displayedColumns: string[] = ['singer', 'song', 'genre', 'registrationDate']; 
  viewMode: 'cards' | 'table' = 'cards'; 

  constructor(private http: HttpClient, private router: Router, private musicService: MusicService) {}

  ngOnInit(): void {
    this.fetchMusic();
  }

  fetchMusic(): void {
    this.http.get<any[]>('http://localhost:5000/api/music').subscribe(data => {
      this.musicList = data;
    });
  }

  // Função para confirmar e excluir música
  confirmDelete(musicId: string): void {
    const confirmation = window.confirm('Tem certeza de que deseja excluir esta música?');
    if (confirmation) {
      this.deleteMusic(musicId);
    }
  }

  // Função para excluir música
  deleteMusic(musicId: string): void {
    this.musicService.deleteMusic(musicId).subscribe(() => {
      // Atualiza a lista após a exclusão
      this.musicList = this.musicList.filter(music => music._id !== musicId);
    });
  }

  viewDetails(musicId: string): void {
    this.router.navigate(['/details', musicId]); // Navega para o componente de detalhes
  }
  
  addNewMusic(): void {
    this.router.navigate(['/new']); // Redireciona para a rota /new
  }
}

