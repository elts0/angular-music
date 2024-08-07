import { Component } from '@angular/core';
import { musicData, playlists } from '../../dummy-data';
import { PlaylistComponent } from "../../shared/playlist/playlist.component";
import { RouterLink } from '@angular/router';
import { SongComponent } from "../../shared/song/song.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [PlaylistComponent, RouterLink, SongComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {
  playlists = playlists;
  music = musicData;
}
