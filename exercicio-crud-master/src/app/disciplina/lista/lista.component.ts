import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisciplinaService } from '../../disciplina.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html'
})
export class ListaComponent extends SuperLista {

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
    this.cols = [
      { field: 'nome', header: 'Nome' }
    ];
  }

}
