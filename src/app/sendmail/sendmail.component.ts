import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { MailFormComponent } from '../mail-form/mail-form.component';
// import { EmailAppProperties } from '../properties.enum';

@Component({
  // selector: 'app-email',
  selector: 'app-mail-modal',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  composeEmail() {
    this.modalService.open(MailFormComponent, { size: 'lg' });

    // this.newEmail.emit({
    //   title: EmailAppProperties.DEFAULT_MESSAGE_TITLE,
    //   message: EmailAppProperties.DEFAULT_MESSAGE_CONTENT
    // });
  }

}
