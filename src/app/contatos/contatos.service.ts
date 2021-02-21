import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from './contato.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(
    private http: HttpClient,
  ) { }
  getContatos(){
    return(this.http.get<Contato[]>('https://my-json-server.typicode.com/vitorfgsantos/fake-api/contatos'));
  }
}
