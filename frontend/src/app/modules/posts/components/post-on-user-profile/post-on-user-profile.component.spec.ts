import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOnUserProfileComponent } from './post-on-user-profile.component';

describe('PostOnUserProfileComponent', () => {
  let component: PostOnUserProfileComponent;
  let fixture: ComponentFixture<PostOnUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostOnUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostOnUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
