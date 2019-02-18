import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TestItemComponent } from './test-item/test-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailContentComponent } from './mail-content/mail-content.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SentComponent } from './sent/sent.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { EmailService } from './email';
import { TextareaComponent } from './textarea/textarea.component';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { SpinnerComponent } from './spinner/spinner.component';
import { RefreshComponent } from './refresh/refresh.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


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
    TextareaComponent,
    SpinnerComponent,
    RefreshComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgxEditorModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
