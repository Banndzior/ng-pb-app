import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InboxType } from './inbox-type.enum';
import { FormEmailComponent } from './form-email/form-email.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inboxType: InboxType = InboxType.Inbox;

  @ViewChild('content')
  content: ElementRef;

  constructor(private modalService: NgbModal) {}

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent() {
    this.modalService.open(FormEmailComponent, { size: 'lg' });
  }
}
