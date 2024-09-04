import { Component, inject, Input, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Playlist } from '../../playlist.model';
import { musicData, playlists } from '../../dummy-data';
import { MusicInfo } from '../../control-panel/music-info.model';
import { SongComponent } from "../../shared/song/song.component";
import { DurationPipe } from "./duration.pipe";

@Component({
  selector: 'app-page-playlist',
  standalone: true,
  imports: [SongComponent, DurationPipe],
  templateUrl: './page-playlist.component.html',
  styleUrl: './page-playlist.component.css',
})
export class PagePlaylistComponent implements OnInit {
  @Input({ required: true }) playlist?: Playlist;
  songs?: MusicInfo[];

  get totalDuration() {
    if (!this.songs) {
      return 0;
    }

    let duration = 0;
    for(let song of this.songs) {
      duration += song.duration;
    }

    return duration;
  }

  ngOnInit(): void {
    this.songs = musicData.filter((s) => this.playlist?.songs.includes(s.id));
  }
}

export const resolvePlaylist: ResolveFn<Playlist | null> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const playlistData = playlists;
  const playlist =
    playlistData.find(
      (u) => u.id === activatedRoute.paramMap.get('playlistId')
    ) || null;
  return playlist;
};

// export const resolveTitle: ResolveFn<string> = (
//   activatedRoute,
//   routerState
// ) => {
//   return resolvePlaylist(activatedRoute, routerState);
// }
