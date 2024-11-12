import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-hourly-sales',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './hourly-sales.component.html',
  styleUrl: './hourly-sales.component.scss'
})
export class HourlySalesComponent {
  PolarChart = new Chart({
    accessibility: {
      enabled: false
    },
    chart : {type : 'polar', plotShadow:false
      , backgroundColor: 'rgba(0, 0, 0, 0)'
    },

    title: {
        text: 'Hourly Sales'
    },
    
    legend: {
      enabled : false,
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },

    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
            format: '{value}°'
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [{
        type: 'column',
        name: 'Column',
        data: [8, 7, 6, 5, 4, 3, 2, 1],
        pointPlacement: 'between'
    }, {
        type: 'line',
        name: 'Line',
        data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        type: 'area',
        name: 'Area',
        data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
});


}
