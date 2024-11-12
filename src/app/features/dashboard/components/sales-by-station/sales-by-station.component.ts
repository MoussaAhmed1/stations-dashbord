import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-sales-by-station',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './sales-by-station.component.html',
  styleUrl: './sales-by-station.component.scss'
})
export class SalesByStationComponent {
  stationData: any[] = [
    { name: 'Station Name', value: 62721,progress: 50 },
    { name: 'Station Name', value: 62721,progress: 50 },
    { name: 'Station Name', value: 'NM',progress: 50 },
  ];
}
