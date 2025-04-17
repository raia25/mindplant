import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantStatusComponent } from './features/plant-status/plant-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlantStatusComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mindplant';
}
