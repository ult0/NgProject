import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() {
  }

  public createDb(): {} | Observable<any> {

    const data = {
      info: {
        id: 1,
        name: `Trash`
      }
    };

    return data;
  }


}
