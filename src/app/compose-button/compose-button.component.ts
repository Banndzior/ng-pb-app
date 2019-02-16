import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  Output,
  ViewChild
} from '@angular/core';
import { FormsModule }   from '@angular/forms';
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

@Component({
  selector: 'app-compose-button',
  templateUrl: './compose-button.component.html',
  styleUrls: ['./compose-button.component.scss']
})
export class ComposeButtonComponent implements OnInit {

  public title: string;
  public contentText: string;

  @ViewChild('content')
  dialogContent: ElementRef;

  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();

  ckeConfig;
  Editor = ClassicEditor;

  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  openDialog() {
    this.modalService.open(this.dialogContent, { size: 'lg' });
  }

  submit(form, modal) : void {
    const {title, contentText} = form.value;
    this.emailService.sentEmail(title, contentText);
    modal.close();
  }
}
