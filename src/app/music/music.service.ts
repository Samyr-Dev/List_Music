import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'https://backend-music1.onrender.com/api/music'; 

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
  };
  // GET: Listar todas as músicas
  getMusics(): Observable<Music[]> {
    console.log('Fazendo requisição GET para:', this.apiUrl);
    return this.http.get<Music[]>(this.apiUrl, this.httpOptions).pipe(
      tap(response => {
        console.log('Resposta da API:', response);
      }),
      catchError(error => {
        console.error('Erro na requisição GET:', error);
        return throwError(error);
      })
    );
  }

  // POST: Criar uma nova música
  createMusic(music: Music): Observable<Music> {
    return this.http.post<Music>(this.apiUrl, music, this.httpOptions);
  }

  // GET: Obter uma música por ID
  getMusicById(id: string): Observable<Music> {
    return this.http.get<Music>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  // PUT: Atualizar uma música
  updateMusic(id: string, music: Music): Observable<Music> {
    return this.http.put<Music>(`${this.apiUrl}/${id}`, music, this.httpOptions);
  }

  // DELETE: Excluir uma música
  deleteMusic(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}


// Defina a interface Music conforme necessário
export interface Music {
  _id?: string;
  singer: string;
  song: string;
  genre: string;
  registrationDate: string;
}
