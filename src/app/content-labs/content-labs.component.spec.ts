import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLabsComponent } from './content-labs.component';

describe('ContentLabsComponent', () => {
  let component: ContentLabsComponent;
  let fixture: ComponentFixture<ContentLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
