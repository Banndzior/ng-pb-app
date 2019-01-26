import {Injectable, Output, EventEmitter} from '@angular/core';

export interface IEmailMessage {
  title: string;
  content: string;

  send();
}

export class InboxEmailMessage implements IEmailMessage {
  constructor(
    public title: string,
    public content: string
  ) {
  }

  send() {
  }
}

export class DraftEmailMessage implements IEmailMessage {
  public title: string;
  public content: string;
  isSent: boolean;

  send() {
  }
}

@Injectable()
export class EmailService {
  inboxMessages: InboxEmailMessage[] = [
    new InboxEmailMessage('tytul1', 'tresc1'),
    new InboxEmailMessage('tytul2', 'tresc2'),
    new InboxEmailMessage('tytul3', 'tresc3'),
    new InboxEmailMessage('tytul4', 'tresc4')
  ];

  emailSentEvent = new EventEmitter<any>();
  filterEvent = new EventEmitter<any>();

  public sentEmail(title: string, content: string) {
    this.inboxMessages.push(
      new InboxEmailMessage(title, content)
    );
    this.emailSentEvent.emit(title);
  }

  public getInboxMessages(filterText: string):
    Promise<InboxEmailMessage[]> {
    let messages = [];
    if (filterText && filterText.length > 0) {
      messages = this.inboxMessages
        .filter(m =>
          m.title.toLowerCase().includes(filterText.toLowerCase()) || m.content.toLowerCase().includes(filterText.toLowerCase())
        );
    } else {
      messages = this.inboxMessages;
    }
    this.filterEvent.emit(messages);
    return new Promise<InboxEmailMessage[]>((resolve) => {
      setTimeout(() => resolve(
        messages
      ), 1000);
    });
  }

}
