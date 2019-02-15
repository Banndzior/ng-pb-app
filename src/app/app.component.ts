import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InboxType } from './inbox-type.enum';
import { EmailService } from './email';
import { FormModalComponent } from './form-modal/form-modal.component';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public inboxType: InboxType = InboxType.Inbox;
  public mailContent: string
  form = new FormGroup({
    mailContent: new FormControl(''),
    title: new FormControl('')
  });  
  

  @ViewChild('content')
  content: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(title: string) {
    console.log('new message', title);

    this.title = title;
    this.mailContent = "";
    const modalRef = this.modalService.open(FormModalComponent, {size: 'lg' });
    //modalRef.componentInstance.id = 10;
  }
}
