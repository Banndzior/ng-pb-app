import {Component, Input, OnInit} from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];

  @Input()
  filter: string;

  constructor(
    public emailService: EmailService
  ) { }

  ngOnInit() {
    console.log('InboxComponent.ngOnInit()');

    this.emailService.emailSentEvent.subscribe((title) => {
      console.log('emailService.emailSentEvent', title);
    });

    this.emailService.filterEvent.subscribe((messages) => {
      this.inboxMessages = messages;
    });

    this.emailService.getInboxMessages(this.filter)
      .then((result) => this.inboxMessages = result);
  }
}
