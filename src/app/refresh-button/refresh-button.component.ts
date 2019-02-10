import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  refresh() {
    this.emailService.refresh();
    // location.reload();
  }
}
