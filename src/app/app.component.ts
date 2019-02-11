import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InboxType } from './inbox-type.enum';
import { EmailService } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public content1: string;
  public inboxType: InboxType = InboxType.Inbox;

  @ViewChild('content')
  content: ElementRef;



  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) { }

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(title: string,content1) {
    console.log('new message', title);

    this.title = title;
    //this.content1 = content1;
    
    this.modalService.open(this.content, { size: 'lg' });
  }


  public sendMessage(modal) {

    this.emailService.sentEmail(this.title,this.content1);
    console.log('message sent',this.content1);
    modal.close();
  }
}
