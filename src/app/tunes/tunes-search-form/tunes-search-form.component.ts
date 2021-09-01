import {Component} from '@angular/core';
import {SongService} from "../service/song.service";
import {debounce} from "lodash";

@Component({
  selector: 'app-tunes-search-form',
  templateUrl: './tunes-search-form.component.html',
  styleUrls: ['./tunes-search-form.component.scss']
})
export class TunesSearchFormComponent {

  constructor(private songService: SongService) {
  }

  public search(str: string): void {
    this.waitDebounce(str);
  }

  public getMusic(str: string): void {
    this.songService.getSongs(str);
  }

  public waitDebounce = debounce((str: string): void => {
    this.getMusic(str)
  }, 500)

}
