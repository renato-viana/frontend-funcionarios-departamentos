import { Component, OnInit } from '@angular/core';
import {
  Departamento,
  DepartamentoService,
} from '../services/departamento.service';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.scss'],
})
export class DepartamentosPesquisaComponent implements OnInit {
  departamentos: Departamento[] = [];
  filteredDepartamentos: Departamento[] = [];
  searchText: string = '';

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos(): void {
    this.departamentos = this.departamentoService.getDepartamentos();
    this.filteredDepartamentos = this.departamentos;
  }

  filterDepartamentos(): void {
    if (this.searchText.trim()) {
      this.filteredDepartamentos = this.departamentos.filter((dep) =>
        dep.nomeDepartamento
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    }
  }

  excluirDepartamento(id: number): void {
    this.departamentoService.deleteDepartamento(id);
    this.loadDepartamentos();
  }
}
