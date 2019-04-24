import { Component, OnInit, Input } from '@angular/core';

import { AnswerKey } from '../models/answer-key.model';

@Component({
  selector: 'app-answer-key',
  templateUrl: './answer-key.component.html',
  styleUrls: ['./answer-key.component.scss']
})
export class AnswerKeyComponent implements OnInit {

  // @Input needed so answer can be seen by both components
  // the variable below is needed to conditionally show the HTML answer key element.
  @Input() private answer;

  constructor() {
  }

  ngOnInit() {
  }
}
