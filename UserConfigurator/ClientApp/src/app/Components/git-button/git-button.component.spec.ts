import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitButtonComponent } from './git-button.component';

describe('GitButtonComponent', () => {
  let component: GitButtonComponent;
  let fixture: ComponentFixture<GitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
