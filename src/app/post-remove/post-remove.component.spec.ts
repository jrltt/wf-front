import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRemoveComponent } from './post-remove.component';

describe('PostRemoveComponent', () => {
  let component: PostRemoveComponent;
  let fixture: ComponentFixture<PostRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
