import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

export class EmailContent {
  constructor(
    public title: string,
    public reciver: string,
    public content: string
  ) { }
}

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})


export class EmailEditorComponent implements OnInit {
  editedEmail: EmailContent = new EmailContent('', '', '');
  constructor() { }

  ngOnInit() {
  }



formSubmit(event: any, myForm: any) {
  console.log(event);
}

}
