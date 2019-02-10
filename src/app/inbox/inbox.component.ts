import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];

  showLoadingSpinner = true;

  constructor(
    public emailService: EmailService
  ) { }

  ngOnInit() {
    console.log('InboxComponent.ngOnInit()');

    this.emailService.emailSentEvent.subscribe((title) => {
      console.log('emailService.emailSentEvent', title);
    });

    this.loadMessages();

    this.emailService.refreshEvent.subscribe(() => {
      this.loadMessages();
    });
  }

  private loadMessages() {
    this.inboxMessages = [];
    this.showLoadingSpinner = true;

    this.emailService.getInboxMessages()
      .then((result) => {
        this.inboxMessages = result;
      })
      .finally(() => this.showLoadingSpinner = false);
  }
}
