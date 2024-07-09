import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-content-panel',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './content-panel.component.html',
  styleUrl: './content-panel.component.css'
})
export class ContentPanelComponent {

}
