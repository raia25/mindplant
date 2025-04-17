import { Injectable } from '@angular/core';
import { PlantMood } from '../models/plant-mood.model';

@Injectable({ providedIn: 'root' })
export class MoodService {
  getMockMood(): PlantMood {
    return {
      name: 'Felice',
      emoji: '😊',
      description: 'La pianta è ben idratata e in un ambiente ideale!',
      message: 'Grazie per avermi annaffiata. Mi sento al top!'
    };
  }
}
