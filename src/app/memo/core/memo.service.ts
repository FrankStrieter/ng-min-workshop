import { HttpClient } from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Memo
} from '../models/memo';



import {tap, catchError} from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MemoService {
  memos: Memo[] = [];
  queryObservable = new Subject< string >();
  editingObservable = new Subject< boolean >();
  _query = '';

  _editing = false;

  constructor(private http: HttpClient) {

  }

  getAllFromApi() {
    return this.http.get('http://localhost:4280/memos');
  }

  addMemo(memo: Memo) {
    this.memos.unshift(memo);
  }

  deleteMemo(memo: Memo) {
    return this.http.delete<any>('http://localhost:4280/memo/' + memo.guid)
    .pipe(
      tap(() => this.memos.splice(this.memos.indexOf(this.memos.find(m => m.guid === memo.guid)), 1)),
      catchError(err => Observable.of(err))
    );
  }

  getById(guid: String) {
    return this.memos.find(memo => memo.guid === guid);
  }

  search() {
    return this.queryObservable;
  }

  edit() {
    return this.editingObservable;
  }

  set query(q) {
    this.queryObservable.next(q);
  }

  set editing(editing) {
    this.editingObservable.next(editing);
  }
}
