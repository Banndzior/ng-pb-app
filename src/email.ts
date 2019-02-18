import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IEmailMessage {
  recipient: string;
  title: string;
  content: string;
  send();
}

export class InboxEmailMessage implements IEmailMessage {
  constructor(public recipient: string, public title: string, public content: string) {}

  send() {}
}

export class DraftEmailMessage implements IEmailMessage {
  public recipient: string;
  public title: string;
  public content: string;
  isSent: boolean;

  send() {}
}

@Injectable()
export class EmailService {
  inboxMessages: InboxEmailMessage[] = [
    new InboxEmailMessage('email1', 'tytul1', 'tresc1'),
    new InboxEmailMessage('email2', 'tytul2', 'tresc2'),
    new InboxEmailMessage('email3', 'tytul3', 'tresc3'),
    new InboxEmailMessage('email4', 'tytul4', 'tresc4')
  ];

  emailSentEvent = new EventEmitter<any>();

  public sentEmail(recipient: string, title: string, content: string) {
    this.inboxMessages.push(new InboxEmailMessage(recipient, title, content));
    this.emailSentEvent.emit(title);
  }

  public getInboxMessages(): Promise<InboxEmailMessage[]> {
    return new Promise<InboxEmailMessage[]>(resolve => {
      setTimeout(() => resolve(this.inboxMessages), 1000);
    });
  }
}
