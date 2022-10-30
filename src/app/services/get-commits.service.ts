import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class GetCommitsService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getCommits(): Observable<any> {
    return this._http.get(this.url);
  }
}
