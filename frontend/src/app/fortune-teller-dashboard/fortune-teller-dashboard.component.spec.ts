import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneTellerDashboardComponent } from './fortune-teller-dashboard.component';

describe('FortuneTellerDashboardComponent', () => {
  let component: FortuneTellerDashboardComponent;
  let fixture: ComponentFixture<FortuneTellerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuneTellerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneTellerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
