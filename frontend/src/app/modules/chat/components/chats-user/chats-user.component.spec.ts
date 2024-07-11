import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsUserComponent } from './chats-user.component';

describe('ChatsUserComponent', () => {
  let component: ChatsUserComponent;
  let fixture: ComponentFixture<ChatsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
