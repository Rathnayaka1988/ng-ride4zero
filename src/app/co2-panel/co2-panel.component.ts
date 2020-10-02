import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Total } from '../models';

@Component({
  selector: 'app-co2-panel',
  templateUrl: './co2-panel.component.html',
  styleUrls: ['./co2-panel.component.scss']
})
export class Co2PanelComponent implements OnInit {
  value: number = 791;
  totals$: Observable<Total>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.totals$ = this.data.getTotals();
    this.totals$.subscribe(totals => {
      console.log("Co2PanelComponent got totals", totals);
      this.value = totals.carbon_g;
    });
  }

}
