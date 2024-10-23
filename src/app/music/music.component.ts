import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MatTableModule,],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {

}
