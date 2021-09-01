import {EventEmitter, Injectable, Output} from '@angular/core';
import {Song} from "../model/song";
import {ItunesService} from "../../api/itunes/itunes.service";
import {iTunesSong} from "../model/iTunesSong";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  @Output() public newSongsHaveArrived: EventEmitter<Song[]> = new EventEmitter<Song[]>()

  constructor(private itunesService: ItunesService) {
    this._songs = [];
  }

  private _songs: Song[];

  public get songs(): Song[] {
    return this._songs;
  }

  public set songs(value: Song[]) {
    this._songs = value;
  }

  public getSongs(query: string): void {
    this.itunesService.getData(query).subscribe(
      //next()
      (data: any) => {
        this.songs = data.results.filter(
          (song: iTunesSong) => song.kind === 'song'
        ).map((song: iTunesSong) => this.extractData(song));
        this.newSongsHaveArrived.emit(this.songs)

      },
      (error: any) => {
        console.log(error)
      },
      () => {
        console.log("koneeeec");
      }
    );
  }


  public extractData({
                       trackId: id,
                       trackName: title,
                       artistName: artist,
                       previewUrl: audioFile,
                       artworkUrl100: artwork,
                       collectionName: album,
                     }: iTunesSong): Song {
    return {
      id,
      title,
      artist,
      audioFile,
      artwork,
      album,
    } as Song;
  };


}
