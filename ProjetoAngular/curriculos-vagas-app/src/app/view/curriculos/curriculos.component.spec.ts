import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculosComponent } from './curriculos.component';

describe('CurriculosComponent', () => {
  let component: CurriculosComponent;
  let fixture: ComponentFixture<CurriculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculosComponent]
    });
    fixture = TestBed.createComponent(CurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
