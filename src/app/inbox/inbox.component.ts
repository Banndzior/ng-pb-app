import { Component, OnInit} from '@angular/core';
import { InboxEmailMessage, EmailService } from '../email';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = []
  selectedEmail: InboxEmailMessage

  constructor(
    private emailService: EmailService

  ) { }

  public toggleAccordian( props:NgbPanelChangeEvent ): void{
    this.selectedEmail = this.inboxMessages[props.panelId]    
    console.log(props.panelId)
 }
 
  ngOnInit() {
    console.log('InboxComponent.ngOnInit()');

    this.emailService.emailSentEvent.subscribe((title) => {
      console.log('emailService.emailSentEvent', title);
    });

    this.emailService.getInboxMessages()
      .then((result) => this.inboxMessages = result);
      
      this.selectedEmail = this.inboxMessages[0]
  }
}
