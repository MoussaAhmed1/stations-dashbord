import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsCardComponent } from './stations-card.component';

describe('StationsCardComponent', () => {
  let component: StationsCardComponent;
  let fixture: ComponentFixture<StationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
