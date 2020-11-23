import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneTellerDetailsCardComponent } from './fortune-teller-details-card.component';

describe('FortuneTellerDetailsCardComponent', () => {
  let component: FortuneTellerDetailsCardComponent;
  let fixture: ComponentFixture<FortuneTellerDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuneTellerDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneTellerDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
