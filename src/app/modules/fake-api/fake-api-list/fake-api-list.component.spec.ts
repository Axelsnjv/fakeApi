import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiListComponent } from './fake-api-list.component';

describe('FakeApiListComponent', () => {
  let component: FakeApiListComponent;
  let fixture: ComponentFixture<FakeApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
