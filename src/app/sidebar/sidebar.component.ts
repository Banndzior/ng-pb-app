import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { InboxType } from "../inbox-type.enum";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public inboxTypes: Array<string>;

  // InboxTypeSelected
  @Output()
  myClick: EventEmitter<InboxType> = new EventEmitter<InboxType>();

  constructor() {}

  ngOnInit() {
    this.inboxTypes = ["inbox", "drafts", "sent", "all mail"];
  }

  // wybor skrzynki
  selectInboxType(index: number) {
    const inboxType = <InboxType>index;
    console.log("select:", index, InboxType[index]);
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
