import { Component, ElementRef, ViewChild } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InboxType } from './inbox-type.enum';
// import { EmailService } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inboxType: InboxType = InboxType.Inbox;
  constructor(
  ) { }

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }
}
