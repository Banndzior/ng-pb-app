import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../email';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EmailAppProperties } from '../properties.enum';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent {
  @Input() id: number;
  emailSendForm: FormGroup;
  titlePlaceholder: string = EmailAppProperties.DEFAULT_MESSAGE_TITLE;
  recipientArray: string[] = ['a.email@ble.com', 'b.email@ble.com', 'c.email@ble.com', 'd.email@ble.com'];

  get recipient() {
    return this.emailSendForm.get('recipient');
  }

  get title() {
    return this.emailSendForm.get('title');
  }

  get mailContent() {
    return this.emailSendForm.get('mailContent');
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    placeholder: EmailAppProperties.DEFAULT_MESSAGE_CONTENT,
    translate: 'no'
  };

  constructor(
    public activeModal: NgbActiveModal,
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.emailSendForm = this.formBuilder.group({
      recipient: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.pattern('^[a-zA-Z ]*$')]),
      mailContent: new FormControl('', [Validators.maxLength(1000)])
    });
  }

  public submitForm() {
    this.emailService.sentEmail(
      this.emailSendForm.value.recipient,
      this.emailSendForm.value.title,
      this.emailSendForm.value.mailContent
    );
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
