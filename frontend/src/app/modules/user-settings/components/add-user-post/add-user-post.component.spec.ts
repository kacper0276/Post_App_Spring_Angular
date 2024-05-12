import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPostComponent } from './add-user-post.component';

describe('AddUserPostComponent', () => {
  let component: AddUserPostComponent;
  let fixture: ComponentFixture<AddUserPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
