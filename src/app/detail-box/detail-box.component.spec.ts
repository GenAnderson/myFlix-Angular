import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoxComponent } from './detail-box.component';

describe('DetailBoxComponent', () => {
  let component: DetailBoxComponent;
  let fixture: ComponentFixture<DetailBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBoxComponent]
    });
    fixture = TestBed.createComponent(DetailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
