import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { InboxType } from './inbox-type.enum';
import { EmailService } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public message: string;
  public inboxType: InboxType = InboxType.Inbox;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote'
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }
    ]
  };

  @ViewChild('content')
  content: ElementRef;

  constructor(private modalService: NgbModal, private emailService: EmailService) {}

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(event) {
    this.title = event;
    this.modalService.open(this.content, { size: 'lg' });
  }

  public sendMessage(modal) {
    this.emailService.sentEmail(this.title, this.message);
    this.modalService.dismissAll();
    this.whenCloseWindow(modal);
  }

  public whenCloseWindow(modal) {
    this.title = '';
    this.message = '';
  }
}
