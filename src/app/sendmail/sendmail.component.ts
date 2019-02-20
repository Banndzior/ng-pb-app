import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { MailFormComponent } from '../mail-form/mail-form.component';

@Component({
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
  }

}
