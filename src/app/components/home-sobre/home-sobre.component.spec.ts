import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSobreComponent } from './home-sobre.component';

describe('HomeSobreComponent', () => {
  let component: HomeSobreComponent;
  let fixture: ComponentFixture<HomeSobreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSobreComponent]
    });
    fixture = TestBed.createComponent(HomeSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
