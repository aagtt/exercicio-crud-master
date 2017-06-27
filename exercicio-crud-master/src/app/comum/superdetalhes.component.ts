import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

export class SuperDetalhes implements OnInit {

  selecionado = {};
  items = [
    {
      label: 'Cancelar', icon: 'fa-close', command: () => {
        this.cancelar();
      }
    }];

  constructor(protected service, protected router: Router, protected route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getOne(params['id']))
      .subscribe((objeto) => this.selecionado = objeto);
  }

  cancelar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  salvar() {
    this.service.add(this.selecionado)
      .then((data) => this.router.navigate(['../..'], { relativeTo: this.route }));
  }

}
