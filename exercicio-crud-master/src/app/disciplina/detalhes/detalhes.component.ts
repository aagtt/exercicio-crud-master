import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DisciplinaService } from '../../disciplina.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  disciplinas = [];

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaDisciplinas();
  }

  atualizaDisciplinas() {
    this.service.getAll().then(response => this.disciplinas = response.values);
  }

  filtrarDisciplinas(event) {
    this.service.filtra(event.query).then(response => this.disciplinas = response.values);
  }

}
