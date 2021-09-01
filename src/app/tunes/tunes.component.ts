import {Component, OnInit} from '@angular/core';
import {Song} from "./model/song";
import {SongService} from "./service/song.service";

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss']
})
export class TunesComponent {
  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  constructor() {
    this._title = "Tunes"
  }

}
