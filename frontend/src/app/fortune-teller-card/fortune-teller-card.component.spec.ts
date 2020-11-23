import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneTellerCardComponent } from './fortune-teller-card.component';

describe('FortuneTellerCardComponent', () => {
  let component: FortuneTellerCardComponent;
  let fixture: ComponentFixture<FortuneTellerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuneTellerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneTellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
