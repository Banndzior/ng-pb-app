import { Component, OnInit, Input } from '@angular/core';
import { InboxType } from '../inbox-type.enum';
import { InboxEmailMessage, EmailService } from '../email';

@Component({
  selector: 'app-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.scss']
})
export class MailContentComponent implements OnInit {
  @Input()
  public inboxType: InboxType;
  filterText: string;
  InboxType = InboxType;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  filterSelectedInbox(filterText: any) {
    this.filterText = filterText;
    if(this.inboxType === 0) {
      this.emailService.getInboxMessages(filterText);
    } else {

    }
  }
}
