import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor() { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = [{
      'codigo' : 1,
      'nome' : 'Carlos',
      'cargo' : 'Professor',
      'endereco': 'Rua teste, 65, Jardim das Palmeiras',
      'cidade' : 'Uberlandia',
      'cep' : '38400-000',
      'pais' : 'Brasil',
      'telefone': '349999999',
      'fax': '3434343434343'
    },
    {
    'codigo' : 2,
    'nome' : 'Leonam',
    'cargo' : 'Especialista',
    'endereco': 'Rua teste, 65, Jardim das Palmeiras',
    'cidade' : 'Uberlandia',
    'cep' : '38400-000',
    'pais' : 'Brasil',
    'telefone': '349999999',
    'fax': '3434343434343'
    }
  ]
  }

}
