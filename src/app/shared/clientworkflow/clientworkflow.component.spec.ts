import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientworkflowComponent } from './clientworkflow.component';

describe('ClientworkflowComponent', () => {
  let component: ClientworkflowComponent;
  let fixture: ComponentFixture<ClientworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientworkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
