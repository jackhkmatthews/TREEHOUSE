import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

  // lots of TS syntactic sugar
  constructor(private http: Http) {

  }

  addComment(entryId: number, comment: { name: string; comment: string}) {
    return this.http.post(`/app/entries/${entryId}/comments`, comment)
      .toPromise();
  }
  
  // lots of TS syntactic sugar
  getEntries(): Promise<Entry[]> {
    return this.http.get('/app/entries')
      .toPromise()
      .then(response => response.json().data as Entry[]);
  }
}
