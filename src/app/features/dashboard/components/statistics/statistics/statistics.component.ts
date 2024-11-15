import { Component } from '@angular/core';
import { StatisticsCardComponent } from '../statistics-card/statistics-card.component';
import { Ststatistics } from '../../../models/statistics';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [StatisticsCardComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
 public statics : Ststatistics[] =  [
    {
      label: 'Total Value',
      value: '71,028',
      currency: 'EGP',
      rising: false,
      percentage: '2%',
      superset: "",
    },
    {
      label: 'Total Sales',
      value: '20,000',
      currency: 'm³',
      rising: true,
      percentage: '50 m³',
      superset: 3,

    },
    {
      label: 'Avg Sales',
      value: '20,000',
      currency: 'm³',
      rising: false,
      percentage: '50 m³',
      superset: 3,

    },
    {
      label: 'Total Transaction Count',
      value: '1567',
      currency: "",
      rising: true,
      percentage: '20',
      superset: "",

    },
  ];
}
