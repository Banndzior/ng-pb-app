import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { TestItemComponent } from './test-item/test-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailContentComponent } from './mail-content/mail-content.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SentComponent } from './sent/sent.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { EmailService } from './email';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    TestItemComponent,
    SidebarComponent,
    MailContentComponent,
    InboxComponent,
    DraftsComponent,
    SentComponent,
    AllMailComponent,
    SendmailComponent,
    LoadingSpinnerComponent,
    RefreshButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule,
    AngularEditorModule
  ],
  exports: [RouterModule],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
