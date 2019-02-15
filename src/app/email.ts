import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IEmailMessage {
    title: string;
    content: string;
    send();
}

export class InboxEmailMessage implements IEmailMessage {
    constructor(
        public title: string,
        public receiver: string,
        public content: string
    ) { }

    send() { }
}

export class DraftEmailMessage implements IEmailMessage {
    public title: string;
    public content: string;
    isSent: boolean;

    send() { }
}

@Injectable()
export class EmailService {
    inboxMessages: InboxEmailMessage[] = [
        new InboxEmailMessage('tytul1', 'odbiorca1', 'tresc1'),
        new InboxEmailMessage('tytul2', 'odbiorca2', 'tresc2'),
        new InboxEmailMessage('tytul3', 'odbiorca3', 'tresc3'),
        new InboxEmailMessage('tytul4', 'odbiorca4', 'tresc4')
    ];

    emailSentEvent = new EventEmitter<any>();

    public sentEmail(title: string, receiver: string, content: string) {
        this.inboxMessages.push(
            new InboxEmailMessage(title, receiver, content)
        );
        this.emailSentEvent.emit(title);
    }

    public getInboxMessages():
        Promise<InboxEmailMessage[]> {
        return new Promise<InboxEmailMessage[]>((resolve) => {
            setTimeout(() => resolve(this.inboxMessages), 1000);
        });
    }

}
