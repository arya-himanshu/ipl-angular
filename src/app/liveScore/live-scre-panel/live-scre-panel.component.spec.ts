import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScrePanelComponent } from './live-scre-panel.component';

describe('LiveScrePanelComponent', () => {
  let component: LiveScrePanelComponent;
  let fixture: ComponentFixture<LiveScrePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveScrePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveScrePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
