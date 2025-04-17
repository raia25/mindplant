import { Component } from '@angular/core';
import { PlantStatusComponent } from '../plant-status/plant-status.component'; // aggiorna il path se diverso


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PlantStatusComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
