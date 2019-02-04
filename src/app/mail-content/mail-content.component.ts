import { Component, OnInit, Input } from "@angular/core";
import { InboxType } from "../inbox-type.enum";
import { InboxComponent } from "../inbox/inbox.component";

@Component({
  selector: "app-mail-content",
  templateUrl: "./mail-content.component.html",
  styleUrls: ["./mail-content.component.scss"]
})
export class MailContentComponent implements OnInit {
  @Input()
  public inboxType: InboxType;

  InboxType = InboxType;

  constructor() {}

  ngOnInit() {}
}
