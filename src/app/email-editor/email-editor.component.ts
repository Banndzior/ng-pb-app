import {Component, Input, OnInit} from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmailAppProperties } from '../properties.enum';
import { EmailService } from '../email';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {

 /* @Input()
  modal: NgbModal;*/

  title = '';
  email = '';
  message = '';

  emails: string[] = [
    'jan.nowak@wp.pl',
    'jan.kowalski@onet.pl',
    'mail@gmail.com'
  ];

  formGroup: FormGroup;

  constructor(fb: FormBuilder, private emailService: EmailService, public modal: NgbModal) {
    this.formGroup = fb.group({
      title: [EmailAppProperties.DEFAULT_MESSAGE_TITLE, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      message: [EmailAppProperties.DEFAULT_MESSAGE_CONTENT, [Validators.maxLength(1000)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  formSubmit(formGroup: FormGroup) {
    this.emailService.sentEmail(this.formGroup.controls.title.value, this.formGroup.controls.message.value);
    this.modal.dismissAll();
    // console.log('formSubmit', myForm);
    console.log(formGroup.getRawValue());
  }
}
