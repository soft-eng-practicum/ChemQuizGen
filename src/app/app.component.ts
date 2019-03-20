import { Component, OnInit } from '@angular/core';

import { AnswerKey } from './models/answer-key.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { };

  // Holds data for child components
  private answer: AnswerKey = new AnswerKey();

  ngOnInit() {
  }
}
