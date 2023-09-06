import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cat } from '../models/cat';
import { environment } from '../../environments/environment';
import { CatResponse } from '../models/cat.response';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private CAT_URL: string = '/data/cats.json';

  constructor(private http: HttpClient) { }

  public getCats(): Observable<Cat[]> {
    return this.http.get<CatResponse>(
      `${environment.BASE_URL}${this.CAT_URL}`
    ).pipe(map(result => result.images));
  }

}
