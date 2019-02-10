import { Injectable } from '@angular/core';


export class InboxEmailMessage {
  public test: string;
  constructor(public title: string, public content: string) {}
}

@Injectable()
export class EmailService {
  private inboxMessages: InboxEmailMessage[] = [
    new InboxEmailMessage('tytul 1', 'tresc 1'),
    new InboxEmailMessage('tytul 2', 'tresc 2'),
    new InboxEmailMessage('tytul 3', 'tresc 3'),
    {
      title: 'tytul 4',
      content: 'tresc 3',
      test: 'test'
    }
  ];

  public sendMessage(title: string, content: string) {
    this.inboxMessages.push(new InboxEmailMessage(title, content));
  }

  public getMessages(): Promise<InboxEmailMessage[]> {
    // return Promise.resolve(this.inboxMessages);
    return new Promise<InboxEmailMessage[]>(resolve => {
      setTimeout(resolve, 500, this.inboxMessages);
      // setTimeout(() => resolve(this.inboxMessages), 3000);
      // resolve(this.inboxMessages);
    });
  }
}
