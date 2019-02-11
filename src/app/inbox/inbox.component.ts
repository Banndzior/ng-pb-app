import { Component, OnInit } from '@angular/core';
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
  filteredMessages: InboxEmailMessage[];
  selectedEmail: InboxEmailMessage;
  display = false;
  filterText = '';

  constructor(
    private emailService: EmailService
  ) { }

  public toggleAccordian(props: NgbPanelChangeEvent): void {
    this.selectedEmail = this.inboxMessages[props.panelId];
    console.log(props.panelId);
  }

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
        this.selectedEmail = this.inboxMessages[0];
        return result;
      })
      .then((result) => this.filteredMessages = result);
  }

  handleSearchInput(event: KeyboardEvent) {
    this.filteredMessages = this.inboxMessages.filter(email => email.title.includes(this.filterText)
      || email.content.includes(this.filterText));
  }
}
