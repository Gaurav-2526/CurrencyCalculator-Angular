import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCurrencyComponent } from './output-currency.component';

describe('OutputCurrencyComponent', () => {
  let component: OutputCurrencyComponent;
  let fixture: ComponentFixture<OutputCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
