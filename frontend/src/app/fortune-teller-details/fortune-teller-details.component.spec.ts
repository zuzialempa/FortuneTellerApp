import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneTellerDetailsComponent } from './fortune-teller-details.component';

describe('FortuneTellerDetailsComponent', () => {
  let component: FortuneTellerDetailsComponent;
  let fixture: ComponentFixture<FortuneTellerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuneTellerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneTellerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
