import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { color } from 'highcharts';

@Component({
  selector: 'app-station-activites',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './station-activites.component.html',
  styleUrl: './station-activites.component.scss'
})
export class StationActivitesComponent {
  PolarChart = new Chart({
    chart: {
        type: 'column'
    },
    title: {
        text: 'STATIONS ACTIVATES OVERVIEW',
        align: 'left'
    },
    xAxis: {
        categories: ['Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        bar:{
          colorAxis:"#fff"
        }
    },
    series: [
        {
            name: 'SALES',
            data: [100, 300, 200, 100, 150, 250],
            color: '#FF7F5C'
        },
        // {
        //     name: 'TRANSACTION',
        //     data: [100, 300, 200, 100, 150, 250],
        //     color: '#FF7F5C'
        // },
        // {
        //     name: 'VALUE',
        //     data: [100, 300, 200, 100, 150, 250],
        //     color: '#FF7F5C'
        // },
        // {
        //     name: 'COMPRESSION',
        //     data: [100, 300, 200, 100, 150, 250],
        //     color: '#FF7F5C'
        // },
    ] as any
});
}
