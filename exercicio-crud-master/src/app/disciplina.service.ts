import { Injectable } from '@angular/core';
import { SuperService } from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class DisciplinaService extends SuperService {

  constructor(http: Http) {
    super('disciplina', http);
  }

  filtra(filtro): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}?searchFields=nome&q=${filtro}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }
}
