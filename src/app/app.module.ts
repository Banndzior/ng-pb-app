import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppComponent } from './app.component';
import { TestItemComponent } from './test-item/test-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailContentComponent } from './mail-content/mail-content.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SentComponent } from './sent/sent.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { EmailService } from './email';

import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormModalComponent } from './form-modal/form-modal.component';

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
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgxEditorModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    TypeaheadModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent
  ]
})
export class AppModule { }
