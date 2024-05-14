import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostsAdminComponent } from './edit-posts-admin.component';

describe('EditPostsAdminComponent', () => {
  let component: EditPostsAdminComponent;
  let fixture: ComponentFixture<EditPostsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPostsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPostsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
