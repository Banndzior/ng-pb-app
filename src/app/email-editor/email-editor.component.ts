import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  editedEmail: EmailContent = new EmailContent(
    'przyklad', 'kamil.mijacz@gmail.com', '');

  constructor() { }

  ngOnInit() {
  }

  receiverChange(value: string) {
    if (value.length > 5) {
      // this.editedEmail.receiver = value;
    }
    console.log('zmiana', value);
  }

  formSubmit(event: any, myForm: NgForm) {
    if (myForm.valid) {
      this.editedEmail = myForm.value;
    }
    console.log(event, myForm);
  }
}
