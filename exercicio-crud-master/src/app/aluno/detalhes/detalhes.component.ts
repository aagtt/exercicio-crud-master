import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from '../../aluno.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  alunos = [];

  constructor(service: AlunoService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAlunos();
  }

  atualizaAlunos() {
    this.service.getAll().then(response => this.alunos = response.values);
  }

  filtrarAlunos(event) {
    this.service.filtra(event.query).then(response => this.alunos = response.values);
  }

}
