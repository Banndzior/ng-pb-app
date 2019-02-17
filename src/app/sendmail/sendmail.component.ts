import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {EmailService} from "../email";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-sendemail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  public title: string;

  @ViewChild('content')
  content: ElementRef;

  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();

  emails: string[] = [
    'test@test.com',
    'kolejny@mail.com',
    'cdn@test.com'
  ];

  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) { }


  ngOnInit() {
  }

  composeEmail() {
    this.modalService.open(this.content, { size: 'lg' });
  }

  public sendMessage(modalForm: NgForm, modal) {

    this.emailService.sentEmail(modalForm.value.title, modalForm.value.message);
    console.log('message sent');
    modal.close();


  }

  public resetMessage(modalForm: NgForm) {
    modalForm.resetForm();
    console.log('message reset');
  }

  public onSubmit(modalForm: NgForm, modal) {
    this.sendMessage(modalForm, modal);
    console.log("wyslane")
  }




}
