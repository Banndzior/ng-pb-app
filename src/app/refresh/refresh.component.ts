import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {

  @Output()
  myRefresh: EventEmitter<any> = new EventEmitter<any>();


public getRefresh=()=>{
  this.myRefresh.emit();
}

  constructor() { }

  ngOnInit() {
  }

}
