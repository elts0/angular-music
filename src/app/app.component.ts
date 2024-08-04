import { Component } from '@angular/core';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { musicData } from './dummy-data';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ControlPanelComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = musicData;
}
