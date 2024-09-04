import { Component, inject } from '@angular/core';
import { MusicQueueService } from '../music-queue.service';
import { SongComponent } from "../../shared/song/song.component";

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [SongComponent],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {
  private musicQueueService = inject(MusicQueueService);

  get songs() {
    return this.musicQueueService.queue.slice(this.musicQueueService.queueId + 1);
  }

  get current() {
    return this.musicQueueService.queue[this.musicQueueService.queueId];
  }
}
