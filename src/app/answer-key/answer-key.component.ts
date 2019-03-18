import { Component, OnInit, Input } from '@angular/core';

import { AnswerKey } from '../models/answer-key.model';

@Component({
  selector: 'app-answer-key',
  templateUrl: './answer-key.component.html',
  styleUrls: ['./answer-key.component.scss']
})
export class AnswerKeyComponent implements OnInit {

  // @Input needed so answer can be seen by both components
  @Input() private answer: AnswerKey;

  constructor() { }

  ngOnInit() {
  }
}
