import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPostsComponent } from './edit-user-posts.component';

describe('EditUserPostsComponent', () => {
  let component: EditUserPostsComponent;
  let fixture: ComponentFixture<EditUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
