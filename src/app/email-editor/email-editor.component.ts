import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class EmailContent {
  constructor(
    public title: string,
    public receiver: string,
    public content: string
  ) { }
}

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {
  // editedEmail: EmailContent = new EmailContent(
  //   'przyklad', 'kamil.mijacz@gmail.com', 'tresc');

  formGroup: FormGroup; /*= new FormGroup({
    title: new FormControl('tytul', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]),
    receiver: new FormControl('mail@mail.com', [
      Validators.required,
      Validators.email
    ])
  });*/

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      title: ['tytul', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]],
      receiver: ['mail@mail.com', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe((info) => {
      console.log(info);
    });
  }

  receiverChange(value: string) {
    if (value.length > 5) {
      // this.editedEmail.receiver = value;
    }
    console.log('zmiana', value);
  }

  formSubmit(event: any, myForm: NgForm = null) {
    if (myForm != null && myForm.valid) {
      // this.editedEmail = myForm.value;
      console.log(event, myForm);
    }

    if (this.formGroup.valid) {
      console.log(<EmailContent>this.formGroup.value);
    }
  }
}
