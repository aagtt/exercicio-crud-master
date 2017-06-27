import { DisciplinaService } from '../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  listaAlunos: any[];
  listaCursos: any[];
  listaDisciplinas: any[];

  constructor(
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService,
  ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.alunoService.getAll().then(response => this.listaAlunos = response.values);
    this.cursoService.getAll().then(response => this.listaCursos = response.values);
    this.disciplinaService.getAll().then(response => this.listaDisciplinas = response.values);
  }

}
