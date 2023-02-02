import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClassComponent } from './free-class.component';

describe('FreeClassComponent', () => {
  let component: FreeClassComponent;
  let fixture: ComponentFixture<FreeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
