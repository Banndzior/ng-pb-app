import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];
  filteredMessages:InboxEmailMessage[];
  
  constructor(
    public emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.emailSentEvent.subscribe((title) => {
    });

    this.emailService.getInboxMessages()
      .then((result) => {
        this.inboxMessages = result; 
        return result;
      })
      .then((result) => this.filteredMessages = result);
  }

  handleSearchInput(event: KeyboardEvent) {
    const keyValue = event.target.value;
    this.filteredMessages = this.inboxMessages.filter(email => email.title.includes(keyValue) || email.content.includes(keyValue));
  }
}
