import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css',
})
export class MainPanelComponent {

}
