import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../model/song";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss'],
  animations: [
    trigger('songAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.85)'
        }),
        animate('0.2s ease')
      ]),
      transition(':leave', [
        animate(
          '0.2s ease',
          style({
            opacity: 0,
            transform: 'scale(0.85)'
          })
        )
      ])
    ])
  ]
})
export class TunesSongComponent implements OnInit {
  constructor() {
    this._song = {} as Song;
  }

  @Input() public _song: Song;

  get song(): Song {
    return this._song;
  }

  set song(value: Song) {
    this._song = value;
  }

  ngOnInit(): void {
  }

}
