import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInnovation } from './ai-innovation';

describe('AiInnovation', () => {
  let component: AiInnovation;
  let fixture: ComponentFixture<AiInnovation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInnovation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInnovation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
