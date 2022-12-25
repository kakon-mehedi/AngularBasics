import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryShowDialogComponent } from './country-show-dialog.component';

describe('CountryShowDialogComponent', () => {
  let component: CountryShowDialogComponent;
  let fixture: ComponentFixture<CountryShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryShowDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
