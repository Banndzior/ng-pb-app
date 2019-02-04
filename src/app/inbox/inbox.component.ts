import { Component, OnInit, Injectable } from "@angular/core";
import { InboxEmailMessage, EmailService } from "../email";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.scss"]
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];
  selectedId = "";

  constructor(public emailService: EmailService) {}
  ngOnInit() {
    console.log("InboxComponent.ngOnInit()");

    this.emailService.emailSentEvent.subscribe(title => {
      console.log("emailService.emailSentEvent", title);
    });

    this.emailService
      .getInboxMessages()
      .then(result => (this.inboxMessages = result));
  }
  public toggleAccordian($event: NgbPanelChangeEvent) {
    this.selectedId = $event.panelId;
    console.log(this.selectedId);
  }
}
