import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) {
  }

  public getInfo(): any {
    return this.httpClient.get('info')
  }
}
