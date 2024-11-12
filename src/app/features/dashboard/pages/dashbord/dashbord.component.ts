import { Component } from '@angular/core';
import { DashboardFiltersComponent } from '../../components/filters/dashboard-filters/dashboard-filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatisticsComponent } from "../../components/statistics/statistics/statistics.component";
import { HourlySalesComponent } from '../../components/hourly-sales/hourly-sales.component';
import { SalesByStationComponent } from '../../components/sales-by-station/sales-by-station.component';
import { StationsCardComponent } from '../../components/station/stations-card/stations-card.component';
import { StationsListComponent } from "../../components/station/stations-list/stations-list.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { StationActivitesComponent } from '../../components/station-activites/station-activites.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    DashboardFiltersComponent,
    MatGridListModule,
    StatisticsComponent,
    HourlySalesComponent,
    SalesByStationComponent,
    StationsCardComponent,
    StationsListComponent,
    MatTabsModule,
    MatIconModule,
    StationActivitesComponent
],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {

}
