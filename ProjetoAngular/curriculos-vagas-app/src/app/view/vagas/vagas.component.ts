// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vagas.service';
import { Vaga } from '../../models/vaga.model';
@Component({
selector: 'app-vagas',
templateUrl: './vagas.component.html',
styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
public vagas: Vaga[] = []; // Uma matriz para armazenar as vagas
constructor(private _vagasService: VagaService) {}
// Injeta o serviço de vagas no construtor do componente
ngOnInit(): void {
this.listarVagas();
// Executa a função de listagem de vagas quando é inicializado
}
// Função para listar as vagas
listarVagas() {
this._vagasService.getVagas().subscribe((retornaVaga) => {
this.vagas = retornaVaga.map((item) => {
// Mapeia os dados retornados para o modelo Vaga
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
}