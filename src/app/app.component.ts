import { Component, inject, OnInit } from '@angular/core';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { musicData } from './dummy-data';
import { ContentComponent } from './content/content.component';
import { MusicQueueService } from './control-panel/music-queue.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ControlPanelComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  private musicQueueService = inject(MusicQueueService);
  
  ngOnInit(): void {
    this.musicQueueService.queue.push(...musicData);
  }
}
