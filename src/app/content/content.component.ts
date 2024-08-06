import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavSidebarComponent, MainPanelComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @ViewChild(NavSidebarComponent) navbar?: NavSidebarComponent; 
  onToggleNavBar() {
    this.navbar?.toggleState();
  }

  router = inject(Router);
}
