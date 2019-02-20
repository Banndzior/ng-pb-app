import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { EmailForm } from '../email-form';
import { EmailService } from '../email';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private emailService: EmailService
  ) {}

  newEmail =  new EmailForm('', '', '');

  emailAdresses = [
    'aemail@test.pl',
    'bemail1@test.pl',
    'cemail2@test.pl',
    'demail3@test.pl',
    'eemail4@test.pl',
    'femail5@test.pl',
    'gemail5@test.pl',
    'hemail5@test.pl',
    'jemail5@test.pl',
    'kemail5@test.pl',
    'lemail5@test.pl',
    'memail5@test.pl',
    'nemail5@test.pl',
    'oemail5@test.pl',
  ];

  sendMessage() {
    this.emailService.sentEmail(this.newEmail.title, this.newEmail.message);
    this.activeModal.dismiss();
  }

}
