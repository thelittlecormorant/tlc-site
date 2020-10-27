import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConentMainComponent } from './conent-main.component';

describe('ConentMainComponent', () => {
  let component: ConentMainComponent;
  let fixture: ComponentFixture<ConentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
