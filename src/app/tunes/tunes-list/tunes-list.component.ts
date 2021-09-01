import {Component, OnInit} from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit {
  constructor(private songService: SongService) {
    this._songs = [];
  }

  private _songs: Song[];

  public get songs(): Song[] {
    return this._songs;
  }

  public set songs(value: Song[]) {
    this._songs = value;
  }

  ngOnInit(): void {
    this.songService.newSongsHaveArrived.subscribe((data: Song[]) => {
      this.songs = data;
    })
  }

}
