import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InboxType } from '../inbox-type.enum';
import { EmailAppProperties } from '../properties.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public inboxTypes: Array<string>;

  // InboxTypeSelected
  @Output()
  myClick: EventEmitter<InboxType> = new EventEmitter<InboxType>();

  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.inboxTypes = [
      'inbox',
      'drafts',
      'sent',
      'all mail'
    ];
  }

  // nowy mail
  composeEmail() {
    const defaultEmailTitle: object = {
          defaultTitle: EmailAppProperties.DEFAULT_MESSAGE_TITLE,
          defaultMessage: EmailAppProperties.DEFAULT_MESSAGE_CONTENT
    };
    this.newEmail.emit(defaultEmailTitle);
  }

  // wybor skrzynki
  selectInboxType(index: number) {
    const inboxType = <InboxType>index;
    console.log('select:', index, InboxType[index]);
    this.myClick.emit(inboxType);

    /*
    switch (inboxType) {
      case InboxType.Inbox:
        break;
      case InboxType.Drafts:
        break;
      case InboxType.Sent:
        break;
      case InboxType.AllMail:
        break;
    } */

    /* js
    switch (index) {
      case 0:
        break;
      case 1:
        break;
    } */
  }
}
