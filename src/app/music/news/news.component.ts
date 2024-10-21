import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  musicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.musicForm = this.formBuilder.group({
      singer: ['', Validators.required],
      song: ['', Validators.required],
      genre: ['', Validators.required],
      registrationDate: ['', Validators.required], 
    })
  }

  onSubmit() {
    if (this.musicForm.valid) {
      console.log('Form data:', this.musicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

