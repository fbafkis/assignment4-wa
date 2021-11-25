import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentariansListComponent } from './parliamentarians-list.component';

describe('ParliamentariansListComponent', () => {
  let component: ParliamentariansListComponent;
  let fixture: ComponentFixture<ParliamentariansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParliamentariansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentariansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
