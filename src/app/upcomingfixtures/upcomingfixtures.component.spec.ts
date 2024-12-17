import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfixturesComponent } from './upcomingfixtures.component';

describe('UpcomingfixturesComponent', () => {
  let component: UpcomingfixturesComponent;
  let fixture: ComponentFixture<UpcomingfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingfixturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
