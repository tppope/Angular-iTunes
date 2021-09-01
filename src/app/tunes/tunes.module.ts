import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TunesComponent} from "./tunes.component";
import {TunesListComponent} from './tunes-list/tunes-list.component';
import {TunesSearchFormComponent} from './tunes-search-form/tunes-search-form.component';
import {TunesSongComponent} from './tunes-list/tunes-song/tunes-song.component';
import {SongifyPipe} from "./pipes/songify.pipe";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [TunesComponent, TunesListComponent, TunesSearchFormComponent, TunesSongComponent, SongifyPipe, ShortenPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class TunesModule {
}
