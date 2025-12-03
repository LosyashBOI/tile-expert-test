import { Component } from '@angular/core';
import { HeaderComponent } from '@header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HeaderComponent],
  styleUrl: './app.css',
})
export class App {}
