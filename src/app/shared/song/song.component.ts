import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MusicInfo } from '../../control-panel/music-info.model';
import { musicData } from '../../dummy-data';
import { MusicQueueService } from '../../control-panel/music-queue.service';
import { PlaybackPipe } from '../../control-panel/playback.pipe';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [RouterLink, PlaybackPipe],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css',
  host: {
    '(click)': 'onPlaySong()',
  },
})
export class SongComponent {
  @Input({ required: true }) musicData!: MusicInfo;

  musicQueueService = inject(MusicQueueService);
  onAbout() {}
  onPlaySong() {
    this.musicQueueService.queue = [
      ...this.musicQueueService.queue?.slice(0, this.musicQueueService.queueId),
      this.musicData,
      ...this.musicQueueService.queue?.slice(this.musicQueueService.queueId),
    ];
    this.musicQueueService.updateCurrentMusic(this.musicData);
    this.musicQueueService.play();
  }
}
