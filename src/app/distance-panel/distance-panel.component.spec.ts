import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancePanelComponent } from './distance-panel.component';

describe('DistancePanelComponent', () => {
  let component: DistancePanelComponent;
  let fixture: ComponentFixture<DistancePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistancePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
