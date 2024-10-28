import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiTestComponent } from './hi-test.component';

describe('HiTestComponent', () => {
  let component: HiTestComponent;
  let fixture: ComponentFixture<HiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
