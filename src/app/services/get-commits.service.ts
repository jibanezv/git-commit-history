import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class GetCommitsService {
  public url: string;
  // @Output() trigger: EventEmitter<any> = new EventEmitter();
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getCommits(): Observable<any> {
    return this._http.get(this.url);
  }
}
