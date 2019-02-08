import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  @Input()
  filter: string;

  constructor() { }

  ngOnInit() {
  }

}
