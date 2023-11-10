// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vagas.service';
@Component({
selector: 'app-painel-vagas',
templateUrl: './painel-vagas.component.html',
styleUrls: ['./painel-vagas.component.css'],
})
export class PainelVagasComponent implements OnInit {
public vaga: Vaga = new Vaga(0, '', '', '', 0);
// Uma instância de 'Vaga' para rastrear os dados do formulário
public vagas: Vaga[] = [];
// Uma matriz para armazenar as vagas listadas
constructor(private _vagasService: VagaService) {}
// aplica o serviço 'VagaService' no construtor
ngOnInit(): void {
this.listarVagas();
// Quando o componente é inicializado, lista as vagas disponíveis
}
listarVagas() {
// Lista as vagas do servidor usando o serviço 'VagaService'
this._vagasService.getVagas().subscribe((retornaVaga) => {
this.vagas = retornaVaga.map((item) => {
// Mapeia os dados retornados para objetos 'Vaga'
return new Vaga(
item.id,
item.nome,
item.foto,
item.descricao,
item.salario
);
});
});
}
listarVaga(vaga: Vaga) {
// Função para listar uma vaga individual no formulário para edição
this.vaga = vaga;
// A vaga clicada é definida como a vaga atual no formulário
}
cadastrar() {
// Função para cadastrar uma nova vaga
this._vagasService.cadastrarVaga(this.vaga).subscribe(
() => {
// Após cadastrar com sucesso
this.vaga = new Vaga(0, '', '', '', 0); // Limpa o formulário
this.listarVagas(); // Atualiza a lista de vagas
},
(err) => {
console.log('Erro ao cadastrar', err);
// Em caso de erro, exibe uma mensagem no console
}
);
}
atualizar(id: number) {
// Função para atualizar uma vaga existente
this._vagasService.atualizarVaga(id, this.vaga).subscribe(
() => {
// Após atualizar com sucesso
this.vaga = new Vaga(0, '', '', '', 0); // Limpa o formulário
this.listarVagas(); // Atualiza a lista de vagas
},
(err) => {
console.log('Erro ao atualizar', err);
}
);
}
excluir(id: number) {
// Função para excluir uma vaga
this._vagasService.removerVaga(id).subscribe(
() => {
// Após excluir com sucesso
this.vaga = new Vaga(0, '', '', '', 0); // Limpa o formulário
this.listarVagas(); // Atualiza a lista de vagas
},
(err) => {
console.log('Erro ao excluir', err); }
); 
}
}