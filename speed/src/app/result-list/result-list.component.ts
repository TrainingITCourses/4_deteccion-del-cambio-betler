import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../store/models/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  
  @Input() public launchesResult: Launch[];

  
  constructor() { }

  ngOnInit() {
  }

}
