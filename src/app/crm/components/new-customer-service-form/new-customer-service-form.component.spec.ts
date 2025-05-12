import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCostumerServiceFormComponent } from './new-customer-service-form.component';

describe('NewCostumerServiceFormComponent', () => {
  let component: NewCostumerServiceFormComponent;
  let fixture: ComponentFixture<NewCostumerServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCostumerServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCostumerServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
