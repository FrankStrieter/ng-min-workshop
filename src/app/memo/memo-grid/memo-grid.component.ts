import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatGridList } from '@angular/material';

import { Memo } from '../models/memo';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-memo-grid',
  templateUrl: './memo-grid.component.html',
  styleUrls: ['./memo-grid.component.scss']
})
export class MemoGridComponent implements OnInit, OnChanges {
  @Input() memosInput;

  constructor(private memoService: MemoService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.memosInput);
  }

  removeMemo(memo: Memo) {
    this.memoService.deleteMemo(memo)
    .subscribe(result => {
      console.log(result);
    }
    );
  }
}
