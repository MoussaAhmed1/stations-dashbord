import { Component } from '@angular/core';
import { DashboardFiltersComponent } from '../../components/filters/dashboard-filters/dashboard-filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatisticsComponent } from "../../components/statistics/statistics/statistics.component";
import { HourlySalesComponent } from '../../components/hourly-sales/hourly-sales.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    DashboardFiltersComponent,
    MatGridListModule,
    StatisticsComponent,
    HourlySalesComponent
],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {

}
