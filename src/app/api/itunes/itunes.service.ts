import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ItunesService {
  constructor(private httpClient: HttpClient) {
    this._url = "https://itunes.apple.com/search" +
      "?term=%QUERY%" +
      "&entity=musicTrack" +
      "&limit=5";
  }

  private _url: string;

  public get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public getData(query: string): Observable<ArrayBuffer> {
    const url: string = this.url.replace('%QUERY%', encodeURI(query))
    return this.sendRequest(url);
  }

  public sendRequest(url: string): Observable<ArrayBuffer> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.get(url, httpOptions);
  }


}
