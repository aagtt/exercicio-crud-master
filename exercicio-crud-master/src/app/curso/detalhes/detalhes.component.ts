import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CursoService } from '../../curso.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  cursos = [];

  constructor(service: CursoService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaCursos();
  }

  atualizaCursos() {
    this.service.getAll().then(response => this.cursos = response.values);
  }

  filtrarCursos(event) {
    this.service.filtra(event.query).then(response => this.cursos = response.values);
  }

}
