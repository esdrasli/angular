import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contatos } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

    API_URL = environment.API_URL;
    httpOptions = {
      headers: new HttpHeaders({
        authorization: '....TOKE DE AUTENTICAÇÃO....'
      })
    };

  constructor(
    private http: HttpClient,
  ) { }

  getContatos() {
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`, this.httpOptions);
  }
  getContato(id: string) {
    return this.http.get<Contatos>(this.API_URL +'/contatos/'+ id, this.httpOptions);
  }
  createContato(contato: Contatos) {
    return this.http.post<Contatos[]>(this.API_URL + '/contatos/', this.httpOptions);
  }
  updateContato(id: string, contato: Contatos) {
    return this.http.put<Contatos[]>(this.API_URL +'/contatos/'+ id, contato,this.httpOptions);
  }
  deleteContato(id: string) {
    return this.http.delete<Contatos>(this.API_URL +'/contatos/'+ id, this.httpOptions);
  }
  
}
