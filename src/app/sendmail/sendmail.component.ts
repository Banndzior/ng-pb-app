import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  composeEmail() {
    this.newEmail.emit('i\'m new');
  }

}
