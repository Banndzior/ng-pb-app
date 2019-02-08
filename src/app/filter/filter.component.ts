import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  filterBox: EventEmitter<any> = new EventEmitter<any>();
  filterText: string;

  constructor() { }

  ngOnInit() {
  }

  filter() {
    this.filterBox.emit(this.filterText);
  }
}
