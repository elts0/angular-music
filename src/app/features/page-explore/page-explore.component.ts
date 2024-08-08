import { Component } from '@angular/core';
import { genres } from '../../dummy-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-explore',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-explore.component.html',
  styleUrl: './page-explore.component.css'
})
export class PageExploreComponent {
  genres = genres;
}
