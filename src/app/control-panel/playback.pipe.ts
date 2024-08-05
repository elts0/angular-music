import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playback',
  standalone: true,
})
export class PlaybackPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) {
      return `0:00`;
    }
    value = Math.floor(value);
    const min = Math.floor(value / 60);
    const sec = String(value % 60).padStart(2, '0');

    return `${min}:${sec}`;
  }
}
