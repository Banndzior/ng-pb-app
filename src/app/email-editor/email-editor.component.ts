import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {
  // title: string = '';

  formGroup: FormGroup = new FormGroup({
    title: new FormControl('xxx', Validators.required),
    email: new FormControl('kamil.mijacz@gmail.com', [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  formSubmit(myForm: NgForm) {
    console.log('formSubmit', myForm);
    alert(JSON.stringify(myForm.value));
  }
}
