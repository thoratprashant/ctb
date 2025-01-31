import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToEhrComponent } from './connect-to-ehr.component';

describe('ConnectToEhrComponent', () => {
  let component: ConnectToEhrComponent;
  let fixture: ComponentFixture<ConnectToEhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectToEhrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectToEhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
