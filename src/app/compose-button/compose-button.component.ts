import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  Output,
  ViewChild
} from '@angular/core';
import { EmailService } from '../email';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import {
  Validators, FormGroup, FormBuilder 
} from '@angular/forms';

@Component({
  selector: 'app-compose-button',
  templateUrl: './compose-button.component.html',
  styleUrls: ['./compose-button.component.scss']
})
export class ComposeButtonComponent implements OnInit {

  public title: string = '';
  public contentText: string = '';
  public recipient: string = '';

  public states: string[] = [
    'banndzior@gmail.com',
    'Marcin@gmail.com',
    'Karolina@gmail.com'
  ];


  formGroup: FormGroup = null;

  @ViewChild('content')
  dialogContent: ElementRef;

  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();

  ckeConfig;
  Editor = ClassicEditor;

  constructor(
    private modalService: NgbModal,
    private emailService: EmailService,
    fb: FormBuilder
  ) { 
    this.formGroup = fb.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(500),
        Validators.pattern('[a-zA-Z]+(\s{0,1}[a-zA-Z-, ])*')
      ]],
      contentText: ['', [
        Validators.required,
        Validators.maxLength(1000),
        
      ]],
      recipient: ['', [
        Validators.required,
        Validators.email]],
    });
  }


  ngOnInit() {

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    this.formGroup.value.recipient = '';
    this.formGroup.value.title = '';
    this.formGroup.value.contentText = '';
  }

  openDialog() {
    this.modalService.open(this.dialogContent, { size: 'lg' });
  }

  formSubmit(modal) {

    this.emailService.sentEmail(this.formGroup.value.title, 'Odbiorca:' + this.formGroup.value.recipient + 'Treść:' + this.formGroup.value.contentText);
    console.log('message sent');
    console.log(this.formGroup);
    this.formGroup.reset();
    modal.close();
  }
  formReset(){
    this.formGroup.reset();
  }
  // formSubmit() {
  //   console.log('formSubmit', this.formGroup);
  //   console.log(this.formGroup.value);
  // }

}
