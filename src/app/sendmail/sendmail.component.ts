import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EmailAppProperties } from '../properties.enum';

@Component({
  selector: 'app-email',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  composeEmail() {
    this.newEmail.emit({
      title: EmailAppProperties.DEFAULT_MESSAGE_TITLE,
      message: EmailAppProperties.DEFAULT_MESSAGE_CONTENT
    });
  }

}
