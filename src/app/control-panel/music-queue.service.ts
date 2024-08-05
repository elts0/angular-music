import { Injectable } from '@angular/core';
import { MusicInfo } from './music-info.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MusicQueueService {
  queue: MusicInfo[] = [];
  queueId: number = 0;
  current?: MusicInfo;
  audio = new Audio();

  private currentSubject = new BehaviorSubject<MusicInfo | undefined>(
    undefined
  );
  public current$: Observable<MusicInfo | undefined> =
    this.currentSubject.asObservable();

  updateCurrent(newMusic: MusicInfo | undefined): void {
    this.currentSubject.next(newMusic);
  }

  load(id: number) {
    this.updateCurrent(this.queue[id]);
    this.audio.src = this.currentSubject.value?.path || '';
  }

  play() {
    if (!this.currentSubject.value) {
      this.load(this.queueId);
    }
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }

  set volume(value: number) {
    this.audio.volume = value;
  }

  get volume() {
    return this.audio.volume;
  }

  get duration() {
    return this.audio.duration;
  }

  get playbackTime() {
    return this.audio.currentTime;
  }

  set playbackTime(time: number) {
    this.audio.currentTime = time;
  }

  next() {
    this.load(++this.queueId);
    this.play();
  }

  reset() {
    this.audio.currentTime = 0;
  }

  previous() {
    if (this.queueId === 0) {
      this.reset();
      this.stop();
      return;
    }

    if (this.audio.currentTime > 3) {
      this.reset();
      return;
    }

    this.load(--this.queueId);
    this.play();
  }
}
