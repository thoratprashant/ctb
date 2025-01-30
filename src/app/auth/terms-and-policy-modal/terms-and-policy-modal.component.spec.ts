import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndPolicyModalComponent } from './terms-and-policy-modal.component';

describe('TermsAndPolicyModalComponent', () => {
  let component: TermsAndPolicyModalComponent;
  let fixture: ComponentFixture<TermsAndPolicyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsAndPolicyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndPolicyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
