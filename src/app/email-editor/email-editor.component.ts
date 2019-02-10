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

  public get myFormGroup(): FormGroup {
    return this._myFormGroup;
  }

  private _myFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    //#region same thing
    /*this.myFormGroup = new FormGroup({
      title: new FormControl(
        'kamil', [
          Validators.required, Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$')
      ]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ])
    });*/
    //#endregion

    this._myFormGroup = fb.group({
      title: ['', [
        Validators.required, Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      email2: ['', [
        Validators.required, Validators.email
      ]],
      checkbox: [true]
    });
  }

  ngOnInit() {
    this.myFormGroup.get('email2').setValue('banndzior@gmail.com');

    this.myFormGroup.valueChanges.subscribe((info) => {
      console.log(info);
    });
  }

  formSubmit() {
    if (this.myFormGroup.valid) {
      console.log(this.myFormGroup.value);
    }
  }

  isValidField(name: string): boolean {
    return this.myFormGroup.get(name).invalid
      && this.myFormGroup.get(name).touched;
  }
}
