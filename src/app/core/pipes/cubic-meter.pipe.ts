import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubicMeter',
  standalone: true
})
export class CubicMeterPipe implements PipeTransform {

  transform(value: number): string {
    return `${value} m³`;
  }

}
