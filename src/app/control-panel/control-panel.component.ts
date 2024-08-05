import { Component, Input } from '@angular/core';
import { MusicInfo } from './music-info.model';
import { PlaybackPipe } from './playback.pipe';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from "../shared/slider/slider.component";
import { SliderDirective } from '../shared/slider/slider.directive';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [PlaybackPipe, FormsModule, SliderComponent, SliderDirective],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
})
export class ControlPanelComponent {
  @Input() musicInfo!: MusicInfo;
  playbackTime = 0;
  volume = 30;
  savedVolume: number | null = null;
  status: 'playing' | 'paused' = 'paused';

  toggleStatus() {
    this.status = this.status === 'playing' ? 'paused' : 'playing';
  }

  toggleVolume() {
    if (this.volume) {
      this.savedVolume = null;
    }

    if (this.savedVolume) {
      this.volume = this.savedVolume;
      this.savedVolume = null;
    }
    else {
      this.savedVolume = this.volume;
      this.volume = 0;
    }
  }
}
