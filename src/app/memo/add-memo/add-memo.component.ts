import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormArray, Form, NgForm } from '@angular/forms';
import { MatButton, MatCheckbox } from '@angular/material';

import { Memo, Todo } from '../models';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {
  @Output() create = new EventEmitter<Memo>();

  memoForm: FormGroup;
  componentHasFocus = false;

  constructor(public memoService: MemoService) { }

  ngOnInit() {
    this.memoForm = this.emptyForm();
  }

  emitCreatedBook(form: NgForm) {
    const memo = new Memo(
      this.memoForm.controls.title.value,
      this.memoForm.controls.text.value, []
    );

    memo.guid = Math.random().toString().substr(12);
    this.create.emit(memo);
    this.memoForm = this.emptyForm();
    form.resetForm();
    this.componentHasFocus = false;
  }

  emptyForm(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl('')
    });
  }


  private abort() {
    this.memoForm = this.emptyForm();
    this.setFocus(false);
  }

  setFocus(hasFocus: boolean) {
    this.componentHasFocus = hasFocus;
  }
}
