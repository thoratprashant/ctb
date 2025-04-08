import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTextEditorComponent } from './angular-text-editor.component';

describe('AngularTextEditorComponent', () => {
  let component: AngularTextEditorComponent;
  let fixture: ComponentFixture<AngularTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTextEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
