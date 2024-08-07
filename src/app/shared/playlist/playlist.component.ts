import { Component, Input } from '@angular/core';
import { Playlist } from '../../playlist.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css',
})
export class PlaylistComponent {
  @Input({ required: true }) playlist!: Playlist;
}
