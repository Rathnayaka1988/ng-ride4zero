import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Total } from '../models';


@Component({
  selector: 'app-distance-panel',
  templateUrl: './distance-panel.component.html',
  styleUrls: ['./distance-panel.component.scss']
})
export class DistancePanelComponent implements OnInit {
  value: number = 1342;
  totals$: Observable<Total>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.totals$ = this.data.getTotals();
    this.totals$.subscribe(totals => {
      console.log("DistancePanelComponent got totals", totals);
      this.value = totals.distance_m;
    });
  }
}
