import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {
  title = '';
  email = '';

  formGroup: FormGroup;
  // formGroup: FormGroup = new FormGroup({
  //   title: new FormControl(
  //     'kamil',
  //     [
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.pattern('^[a-zA-Z]+$')
  //     ]
  //   ),
  //   email: new FormControl(
  //     '',
  //     [
  //       Validators.required,
  //       Validators.email
  //     ]
  //   )
  // });

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      title: ['kamil', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  formSubmit(formGroup: FormGroup) {
    // console.log('formSubmit', myForm);
    console.log(formGroup.getRawValue());
  }
}
