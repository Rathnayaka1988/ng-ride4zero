import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2PanelComponent } from './co2-panel.component';

describe('Co2PanelComponent', () => {
  let component: Co2PanelComponent;
  let fixture: ComponentFixture<Co2PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Co2PanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
