// Importa os módulos necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';
@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private apiUrl = 'http://localhost:3000/vagas'; // Caminho para o arquivo JSON
  constructor(private http: HttpClient) { }
  // Obtém a lista de vagas a partir do arquivo JSON
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }
  // Cadastra uma nova vaga no servidor
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }
  // Atualiza uma vaga existente no servidor
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizar, vaga);
  }
  // Remove uma vaga do servidor
  removerVaga(id: any): Observable<Vaga[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }
}