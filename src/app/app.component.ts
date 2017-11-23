import { Component } from '@angular/core';
import {Memo} from './memo/models/memo';
import { FormGroup } from '@angular/forms';
import { MemoService } from './memo/core/memo.service';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;

  constructor(private memoService: MemoService) {
    this.memoService.getAllFromApi().subscribe((memos: Memo[]) => {
      memos.forEach(memo => {
        this.memoService.memos.push(memo);
      });
      console.log(this.memoService.memos);
    });
  }

  applyQuery(query: string) {
    this.memoService.query = query;
  }

}
