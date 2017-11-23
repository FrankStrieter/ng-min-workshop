
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCard } from '@angular/material';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss']
})
export class MemoCardComponent {
  @Input() memo: Memo;
  @Output() delete = new EventEmitter<Memo>();

  removeMemo(memo: Memo) {
    this.delete.emit(memo);
  }
}
