import { Component } from '@angular/core';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { ContentPanelComponent } from "./content-panel/content-panel.component";
import { musicData } from './dummy-data';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ControlPanelComponent, NavSidebarComponent, ContentPanelComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = musicData;
}
