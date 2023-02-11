import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVideoComponent } from './hero-video.component';

describe('HeroVideoComponent', () => {
  let component: HeroVideoComponent;
  let fixture: ComponentFixture<HeroVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
