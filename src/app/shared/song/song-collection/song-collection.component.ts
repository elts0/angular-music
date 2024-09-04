import { Component, inject, Input } from '@angular/core';
import { MusicInfo } from '../../../control-panel/music-info.model';
import { RouterLink } from '@angular/router';
import { PlaybackPipe } from '../../../control-panel/playback.pipe';
import { MusicQueueService } from '../../../control-panel/music-queue.service';

@Component({
  selector: '[app-song-collection]',
  standalone: true,
  imports: [RouterLink, PlaybackPipe],
  templateUrl: './song-collection.component.html',
  styleUrl: './song-collection.component.css',
  host: {
    '(click)': 'onPlaySong()',
  },
})
export class SongCollectionComponent {
  @Input({ required: true }) musicData!: MusicInfo;

  musicQueueService = inject(MusicQueueService);
  onAbout() {}
  onPlaySong() {
    this.musicQueueService.updateCurrentMusic(this.musicData);
    this.musicQueueService.play();
  }
}
