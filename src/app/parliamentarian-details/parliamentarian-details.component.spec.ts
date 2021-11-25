import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianDetailsComponent } from './parliamentarian-details.component';

describe('ParliamentarianDetailsComponent', () => {
  let component: ParliamentarianDetailsComponent;
  let fixture: ComponentFixture<ParliamentarianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParliamentarianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
