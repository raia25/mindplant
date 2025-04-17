import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoodService, PlantMood } from '../../core/services/plant-data.service'; // Importa PlantMood dal servizio
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant-status',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './plant-status.component.html',
  styleUrls: ['./plant-status.component.css']
})
export class PlantStatusComponent {
  mood$: Observable<PlantMood>;

  constructor(private moodService: MoodService) {
    // Chiama getMockMood che ora restituisce un Observable<PlantMood>
    this.mood$ = this.moodService.getMockMood();
  }
}
