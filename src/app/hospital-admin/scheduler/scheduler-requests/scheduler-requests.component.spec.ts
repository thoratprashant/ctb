import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerRequestsComponent } from './scheduler-requests.component';

describe('SchedulerRequestsComponent', () => {
  let component: SchedulerRequestsComponent;
  let fixture: ComponentFixture<SchedulerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
