import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IStation } from '../../../models/stations';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-stations-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './stations-card.component.html',
  styleUrl: './stations-card.component.scss'
})
export class StationsCardComponent {
  @Input() stationData!: IStation;

}
