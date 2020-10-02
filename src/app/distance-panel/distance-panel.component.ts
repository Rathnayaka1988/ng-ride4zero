import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Total } from '../models';

import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-distance-panel',
  templateUrl: './distance-panel.component.html',
  styleUrls: ['./distance-panel.component.scss']
})
export class DistancePanelComponent implements OnInit {
  value: number = 0;
  //totals$: Observable<Total>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.data.getTotals())
      )
      .subscribe(totals => {
        console.log("DistancePanelComponent got totals", totals);
        this.value = totals.distance_m;
      });
  }
}
