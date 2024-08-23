import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionCardsComponent } from './redirection-cards.component';

describe('RedirectionCardsComponent', () => {
  let component: RedirectionCardsComponent;
  let fixture: ComponentFixture<RedirectionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectionCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedirectionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
