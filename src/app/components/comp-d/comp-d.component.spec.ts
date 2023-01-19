import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDComponent } from './comp-d.component';

describe('CompDComponent', () => {
  let component: CompDComponent;
  let fixture: ComponentFixture<CompDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
