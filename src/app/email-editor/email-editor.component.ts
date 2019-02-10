import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent implements OnInit {
  title: string = '';
  constructor() { }

  ngOnInit() {
  }

  formSubmit(myForm: NgForm){
    console.log("formSubmit", myForm);
  }

}
