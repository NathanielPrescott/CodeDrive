import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginComponent } from './dialog-login.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DialogLoginComponent', () => {
  let component: DialogLoginComponent;
  let fixture: ComponentFixture<DialogLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: MatDialogRef, useValue: [] }, { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should ')
});
