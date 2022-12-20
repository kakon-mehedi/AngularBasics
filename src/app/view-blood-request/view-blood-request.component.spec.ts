import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodRequestComponent } from './view-blood-request.component';

describe('ViewBloodRequestComponent', () => {
  let component: ViewBloodRequestComponent;
  let fixture: ComponentFixture<ViewBloodRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
