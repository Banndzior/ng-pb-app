import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {

  @Input()
  filter: string;

  constructor() { }

  ngOnInit() {
  }

}
