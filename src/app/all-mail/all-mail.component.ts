import {
  Component, OnInit, Input, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-all-mail',
  templateUrl: './all-mail.component.html',
  styleUrls: ['./all-mail.component.scss']
})
export class AllMailComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {

  initialChildEvents: string[];
  continuousChildEvents: string[];

  @Output()
  childMessage = new EventEmitter<string>();

  private hasInitialLifecycleFinished = false;
  private ngAfterViewCheckedEventCount = 0;

  constructor() {
    this.initialChildEvents = [];
    this.continuousChildEvents = [];
  }

  private logEvent(message: string) {
    if (!this.hasInitialLifecycleFinished) {
      this.initialChildEvents.push(message);
    } else {
      this.continuousChildEvents.push(message);
    }
  }

  ngOnChanges(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngOnChanges`);
  }

  ngOnInit(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngOnInit`);
  }

  ngDoCheck(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngDoCheck`);
  }

  ngAfterContentInit(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-
    ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-
    ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`child: [${new Date().toLocaleTimeString()}]-
    ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedEventCount += 1;
    if (this.ngAfterViewCheckedEventCount === 2) {
      this.hasInitialLifecycleFinished = true;
    }
    console.log(`child: [${new Date().toLocaleTimeString()}]-
    ngAfterViewChecked`);
  }
}
