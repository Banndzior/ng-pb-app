import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InboxType } from '../inbox-type.enum';

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

  constructor() { }

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
    this.newEmail.emit('i\'m new');
  }

  // wybor skrzynki
  selectInboxType(index: number) {
    const inboxType = <InboxType>index;
    console.log('select:', index, InboxType[index]);
    this.myClick.emit(inboxType);
  }
}
