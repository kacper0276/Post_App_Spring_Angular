import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostEditFormComponent } from './user-post-edit-form.component';

describe('UserPostEditFormComponent', () => {
  let component: UserPostEditFormComponent;
  let fixture: ComponentFixture<UserPostEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPostEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPostEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
