import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface PlantMood {
  name: string;
  emoji: string;
  description: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class MoodService {
  getMockMood(): Observable<PlantMood> {
    const mood: PlantMood = {
      name: 'Felice',
      emoji: '../../../assets/emojy_pianta_felice.png',
      description: 'La pianta è ben idratata e in un ambiente ideale!',
      message: 'Grazie per avermi annaffiata. Mi sento al top!'
    };
    return of(mood);  
  }
}
