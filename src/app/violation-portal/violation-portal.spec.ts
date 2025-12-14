import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationPortal } from './violation-portal';

describe('ViolationPortal', () => {
  let component: ViolationPortal;
  let fixture: ComponentFixture<ViolationPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolationPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViolationPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
