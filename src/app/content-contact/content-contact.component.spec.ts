import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactComponent } from './content-contact.component';

describe('ContentContactComponent', () => {
  let component: ContentContactComponent;
  let fixture: ComponentFixture<ContentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
