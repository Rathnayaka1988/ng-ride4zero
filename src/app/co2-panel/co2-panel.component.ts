import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Total } from '../models';

import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-co2-panel',
  templateUrl: './co2-panel.component.html',
  styleUrls: ['./co2-panel.component.scss']
})
export class Co2PanelComponent implements OnInit {
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
        console.log("Co2PanelComponent got totals", totals);
        this.value = totals.carbon_g;
      });
  }

}
