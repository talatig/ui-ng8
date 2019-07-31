import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSuccessComponent } from './storesuccess.component';

describe('StoreSuccessComponent', () => {
  let component: StoreSuccessComponent;
  let fixture: ComponentFixture<StoreSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
