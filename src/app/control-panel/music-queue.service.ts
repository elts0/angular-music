import { Injectable } from '@angular/core';
import { MusicInfo } from './music-info.model';
import { BehaviorSubject, interval, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MusicQueueService {
  queue: MusicInfo[] = [];
  queueId: number = 0;
  current?: MusicInfo;
  audio = new Audio();
  status: 'playing' | 'paused' = 'paused';
  
  private currentMusicSubject = new BehaviorSubject<MusicInfo | undefined>(
    undefined
  );
  public currentMusic$: Observable<MusicInfo | undefined> =
  this.currentMusicSubject.asObservable();
  

  private currentTimeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentTime$: Observable<number> = this.currentTimeSubject.asObservable();

  constructor() {
    this.load(0);

    interval(500).pipe(
      map(() => this.audio.currentTime)
    ).subscribe(time => {
      this.currentTimeSubject.next(time);
      if (time === this.audio.duration) {
        this.next();
      }
    });
  }

  set currentTime(value: number) {
    this.audio.currentTime = value;
    this.currentTimeSubject.next(value); // Update the observable
  }

  get currentTime(): number {
    return this.audio.currentTime;
  }

  updateCurrentMusic(newMusic: MusicInfo | undefined): void {
    this.currentMusicSubject.next(newMusic);
    this.audio.src = this.currentMusicSubject.value?.path || '';
  }

  load(id: number) {
    this.updateCurrentMusic(this.queue[id]);
    this.audio.load();
  }

  play() {
    if (!this.currentMusicSubject.value) {
      this.load(this.queueId);
    }
    this.audio.play();
    this.status = 'playing';
  }

  stop() {
    this.audio.pause();
    this.status = 'paused';
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

  next() {
    if (this.queueId + 1 === this.queue.length) {
      this.reset();
      this.stop();
      return;
    }
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
