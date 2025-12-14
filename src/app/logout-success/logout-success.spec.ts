import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutSuccess } from './logout-success';

describe('LogoutSuccess', () => {
  let component: LogoutSuccess;
  let fixture: ComponentFixture<LogoutSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
