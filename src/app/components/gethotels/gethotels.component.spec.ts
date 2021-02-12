import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethotelsComponent } from './gethotels.component';

describe('GethotelsComponent', () => {
  let component: GethotelsComponent;
  let fixture: ComponentFixture<GethotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GethotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
