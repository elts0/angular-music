import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { Router } from '@angular/router';
import { QueueComponent } from "../control-panel/queue/queue.component";
import { MusicQueueService } from '../control-panel/music-queue.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavSidebarComponent, MainPanelComponent, QueueComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @ViewChild(NavSidebarComponent) navbar?: NavSidebarComponent; 
  onToggleNavBar() {
    this.navbar?.toggleState();
  }

  router = inject(Router);
  queueService = inject(MusicQueueService);
}
