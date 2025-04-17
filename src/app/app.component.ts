import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantStatusComponent } from './features/plant-status/plant-status.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlantStatusComponent,DashboardComponent, LoginComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mindplant';
}
