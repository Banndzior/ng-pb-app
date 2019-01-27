import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';

import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];
  display: boolean = false;

  constructor(
    public emailService: EmailService
  ) { }

  ngOnInit() {
    console.log('InboxComponent.ngOnInit()');

    this.emailService.emailSentEvent.subscribe((title) => {
      console.log('emailService.emailSentEvent', title);
    });

    this.display = true;

    this.emailService.getInboxMessages()
      .then((result) => {
        this.inboxMessages = result;
        this.display = false;
      }
      );
  }
}
