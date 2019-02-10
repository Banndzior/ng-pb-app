import { Component, OnInit } from '@angular/core';
import {
  Validators, FormGroup, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {
  title = '';

  formGroup: FormGroup = null;

  constructor(fb: FormBuilder) {
    //#region implicit declaration
    /*this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });*/
    //#endregion

    this.formGroup = fb.group({
      title: ['', Validators.required],
      email2: ['', [
        Validators.required,
        Validators.email
      ]],
      toSend: [true]
    });
  }

  ngOnInit() {
    this.formGroup.get('email2').patchValue('banndzior@gmail.com');

    this.formGroup.valueChanges.subscribe((info) => {
      console.log(info);
    });
  }

  formSubmit() {
    console.log('formSubmit', this.formGroup);
    console.log(this.formGroup.value);
  }
}
