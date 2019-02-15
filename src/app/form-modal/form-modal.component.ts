import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../email';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {

  @Input()id: number;
  form: FormGroup;
  receivers: Array<string>;
  get title() {
    return this.form.get('title');
  }
  get receiver() {
    return this.form.get('receiver');
  }
  get mailContent() {
    return this.form.get('mailContent');
  }

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder,
   private emailService: EmailService
  ) {
    this.createForm();
    this.getReceivers();
    console.log(this.receivers)
  }
  private createForm() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.pattern('^[a-zA-Z ]*$')]),
      receiver: new FormControl('', [Validators.required, Validators.email]),
      mailContent: new FormControl('', [Validators.maxLength(1000)])
    });
  }

private getReceivers()
{
  this.receivers = new Array<string>();
  this.emailService.getInboxMessages()
      .then(result => {
        result.map(message => this.receivers.push(message.receiver));
        this.receivers = [...Array.from(new Set(this.receivers))]; //only uniqe values
      });
}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  public reset() {
    this.form.reset({
    })
  }

  public sendMessage() {
    console.log(this.form.value.title  + "," + this.form.value.mailContent + "," + this.form.value.receiver);
    this.emailService.sentEmail(this.form.value.title, this.form.value.receiver, this.form.value.mailContent);
    console.log('message sent');
    this.closeModal();
  }


}
