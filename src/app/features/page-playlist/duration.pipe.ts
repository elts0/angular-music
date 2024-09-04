import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {
  transform(value: number | undefined): string {
    let hours = 0, minutes = 0;
    if (value) {
      value = Math.floor(value);
      minutes = Math.floor(value / 60);
      hours = Math.floor(minutes / 60);
      minutes -= hours * 60;
    }

    return `${hours} hr ${minutes} min`;
  }
}
