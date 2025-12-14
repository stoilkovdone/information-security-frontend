import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationEmailPending } from './verification-email-pending';

describe('VerificationEmailPending', () => {
  let component: VerificationEmailPending;
  let fixture: ComponentFixture<VerificationEmailPending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationEmailPending]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationEmailPending);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
