import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesRepositoryComponent } from './favorites-repository.component';

describe('FavoritesRepositoryComponent', () => {
  let component: FavoritesRepositoryComponent;
  let fixture: ComponentFixture<FavoritesRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
