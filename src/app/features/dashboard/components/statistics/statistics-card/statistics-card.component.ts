import { Component, Input, input } from '@angular/core';
import { Ststatistics } from '../../../models/statistics';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {
@Input() statics!: Ststatistics

}
