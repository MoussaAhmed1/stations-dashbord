import { Component } from '@angular/core';
import { StationsCardComponent } from '../stations-card/stations-card.component';
import { IStation } from '../../../models/stations';

@Component({
  selector: 'app-stations-list',
  standalone: true,
  imports: [StationsCardComponent],
  templateUrl: './stations-list.component.html',
  styleUrl: './stations-list.component.scss',
})
export class StationsListComponent {
  stations: IStation[] = [
    {
      id: 1,
      name: 'STATION NAME 1',
      location: 'Location 1',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      totalTransactionCount: '5161',
      maxTransactionPerHour: '20',
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
    {
      id: 2,
      name: 'STATION NAME 2',
      location: 'Location 2',
      totalSales: '45,300 m³',
      totalValue: '400 EGP',
      compressionState: 'Decompression',
      totalTransactionCount: '4321',
      maxTransactionPerHour: '15',
      maxTransactionDateTime: '8-2-2021 11:30 AM',
    },
    {
      id: 3,
      name: 'STATION NAME 3',
      location: 'Location 3',
      totalSales: '50,000 m³',
      totalValue: '500 EGP',
      compressionState: 'Compression',
      totalTransactionCount: '5200',
      maxTransactionPerHour: '18',
      maxTransactionDateTime: '8-3-2021 02:45 PM',
    },
    {
      id: 4,
      name: 'STATION NAME 4',
      location: 'Location 4',
      totalSales: '70,000 m³',
      totalValue: '650 EGP',
      compressionState: 'Decompression',
      totalTransactionCount: '6000',
      maxTransactionPerHour: '22',
      maxTransactionDateTime: '8-4-2021 09:00 AM',
    },
    {
      id: 5,
      name: 'STATION NAME 5',
      location: 'Location 5',
      totalSales: '80,000 m³',
      totalValue: '700 EGP',
      compressionState: 'Compression',
      totalTransactionCount: '7100',
      maxTransactionPerHour: '25',
      maxTransactionDateTime: '8-5-2021 07:30 PM',
    },
  ];
}
