import { Component } from "@angular/core";

import { InboxType } from "./inbox-type.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public inboxType: InboxType = InboxType.Inbox;

  constructor() {}

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }
}
