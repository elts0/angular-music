import { Component } from '@angular/core';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { ContentPanelComponent } from "./content-panel/content-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ControlPanelComponent, NavSidebarComponent, ContentPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
