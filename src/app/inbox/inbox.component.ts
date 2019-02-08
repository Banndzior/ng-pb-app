import {Component, Input, OnInit} from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];
  selectedEmail: InboxEmailMessage;
  display: boolean = false;

  @Input()
  filter: string;

  constructor(
    private emailService: EmailService

  ) { }

  public toggleAccordian(props: NgbPanelChangeEvent): void {
    this.selectedEmail = this.inboxMessages[props.panelId]
    console.log(props.panelId)
  }

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

    this.display = true;

    this.emailService.getInboxMessages()
      .then((result) => {
        this.inboxMessages = result;
        this.display = false;

    this.selectedEmail = this.inboxMessages[0];
      }
      );
  }
}
