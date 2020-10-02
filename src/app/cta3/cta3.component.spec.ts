import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cta3Component } from './cta3.component';

describe('Cta3Component', () => {
  let component: Cta3Component;
  let fixture: ComponentFixture<Cta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
