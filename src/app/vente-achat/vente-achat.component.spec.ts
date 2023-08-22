import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteAchatComponent } from './vente-achat.component';

describe('VenteAchatComponent', () => {
  let component: VenteAchatComponent;
  let fixture: ComponentFixture<VenteAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenteAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
