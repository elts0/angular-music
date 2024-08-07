import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MusicInfo } from '../../control-panel/music-info.model';
import { musicData } from '../../dummy-data';
import { MusicQueueService } from '../../control-panel/music-queue.service';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [RouterLink],
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
    this.musicQueueService.updateCurrentMusic(this.musicData);
    this.musicQueueService.play();
  }
}
