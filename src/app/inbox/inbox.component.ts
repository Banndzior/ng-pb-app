import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];
  
  activeItem : any;
  itemNumber : number;

  constructor(
    public emailService: EmailService
  ) { }
  
  
  ngOnInit() {
    console.log('InboxComponent.ngOnInit()');

    this.emailService.emailSentEvent.subscribe((title) => {
      console.log('emailService.emailSentEvent', title);
    });

    this.emailService.getInboxMessages()
      .then((result) => this.inboxMessages = result);
  }
  onclick(item,i){
  
    this.activeItem = item;
    this.itemNumber = i;

  }
}
