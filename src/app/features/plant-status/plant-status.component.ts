import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantMood } from '../../core/models/plant-mood.model';
import { MoodService } from '../../core/services/plant-data.service';

@Component({
  selector: 'app-plant-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-status.component.html',
  styleUrls: ['./plant-status.component.css']
})
export class PlantStatusComponent {
  mood: PlantMood;

  constructor(private moodService: MoodService) {
    this.mood = this.moodService.getMockMood();
  }
}
