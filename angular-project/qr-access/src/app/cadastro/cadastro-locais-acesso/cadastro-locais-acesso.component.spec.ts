import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLocaisAcessoComponent } from './cadastro-locais-acesso.component';

describe('CadastroLocaisAcessoComponent', () => {
  let component: CadastroLocaisAcessoComponent;
  let fixture: ComponentFixture<CadastroLocaisAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLocaisAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLocaisAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
