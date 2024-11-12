import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationActivitesComponent } from './station-activites.component';

describe('StationActivitesComponent', () => {
  let component: StationActivitesComponent;
  let fixture: ComponentFixture<StationActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationActivitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
