import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EmailService} from '../email';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  public recipients: string[] = ['test1@test.pl', 'test2@test.pl', 'test3@test.pl'];


  get recipient() {
    return this.emailSendForm.get('recipient');
  }

  get title() {
    return this.emailSendForm.get('title');
  }

  get message() {
    return this.emailSendForm.get('message');
  }

  emailSendForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  public submitForm() {
    this.emailService.sentEmail(
      this.emailSendForm.value.title,
      this.emailSendForm.value.recipient,
      this.emailSendForm.value.message
    );
    this.activeModal.close();
  }

  private createForm() {
    this.emailSendForm = this.formBuilder.group({
      recipient: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.pattern('^[a-zA-Z ]*$')]),
      message: new FormControl('', [Validators.maxLength(1000)])
    });
  }

  public closeModal() {
    this.activeModal.close();
  }

}
