import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css',
})
export class NavSidebarComponent {
  state: 'full' | 'collapsed' = 'full';

  toggleState() {
    this.state = this.state === 'full' ? 'collapsed' : 'full';
  }
}
