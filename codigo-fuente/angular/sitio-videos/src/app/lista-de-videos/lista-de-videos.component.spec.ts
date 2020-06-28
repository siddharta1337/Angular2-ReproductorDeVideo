import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeVideosComponent } from './lista-de-videos.component';

describe('ListaDeVideosComponent', () => {
  let component: ListaDeVideosComponent;
  let fixture: ComponentFixture<ListaDeVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
