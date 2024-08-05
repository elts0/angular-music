import { afterNextRender, Component, inject, Input, OnInit } from '@angular/core';
import { MusicInfo } from './music-info.model';
import { PlaybackPipe } from './playback.pipe';
import { FormsModule } from '@angular/forms';
import { SliderDirective } from '../shared/slider/slider.directive';
import { MusicQueueService } from './music-queue.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [PlaybackPipe, FormsModule, SliderDirective, RouterLink],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
})
export class ControlPanelComponent {
  musicInfo?: MusicInfo;
  savedVolume: number | null = null;
  status: 'playing' | 'paused' = 'paused';

  private musicQueueService = inject(MusicQueueService);

  ngOnInit(): void {
    this.musicQueueService.current$.subscribe({
      next: (data: MusicInfo | undefined) => {
        this.musicInfo = data;
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }

  get volume() {
    return this.musicQueueService.volume;
  }

  set volume(value) {
    this.musicQueueService.volume = value;
  }

  get playbackTime() {
    return this.musicQueueService.playbackTime;
  }

  set playbackTime(time: number) {
    this.musicQueueService.playbackTime = time;
  }

  toggleStatus() {
    if (this.status === 'playing') {
      this.musicQueueService.stop();
      this.status = 'paused';
    } else {
      this.musicQueueService.play();
      this.status = 'playing';
    }
  }

  toggleVolume() {
    if (this.volume) {
      this.savedVolume = null;
    }

    if (this.savedVolume) {
      this.volume = this.savedVolume;
      this.savedVolume = null;
    } else {
      this.savedVolume = this.volume;
      this.volume = 0;
    }
  }

  nextTrack() {
    this.musicQueueService.next();
  }

  previousTrack() {
    this.musicQueueService.previous();
  }
}
