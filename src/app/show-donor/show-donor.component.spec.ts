import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonorComponent } from './show-donor.component';

describe('ShowDonorComponent', () => {
  let component: ShowDonorComponent;
  let fixture: ComponentFixture<ShowDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
