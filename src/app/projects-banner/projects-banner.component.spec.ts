import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBannerComponent } from './projects-banner.component';

describe('ProjectsBannerComponent', () => {
  let component: ProjectsBannerComponent;
  let fixture: ComponentFixture<ProjectsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
