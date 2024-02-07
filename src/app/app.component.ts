import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'todoapp';
  variable='Var 2';
  tasks=[
    'Estudiar Angular',
    'Estudiar SASS',
    'Estudiar Pruebas unitarias Con Jasmine, Karma',
    'Estudiar Patrones de diseño Como:  Singleton'
  ]
}
