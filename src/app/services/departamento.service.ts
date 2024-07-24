import { Injectable } from '@angular/core';

export interface Departamento {
  id: number;
  nomeDepartamento: string;
}

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  private departamentos: Departamento[] = [
    { id: 1, nomeDepartamento: 'Recursos Humanos' },
    { id: 2, nomeDepartamento: 'Financeiro' },
    { id: 3, nomeDepartamento: 'TI' },
    { id: 4, nomeDepartamento: 'Marketing' },
    { id: 5, nomeDepartamento: 'Vendas' },
    { id: 6, nomeDepartamento: 'Operações' },
    { id: 7, nomeDepartamento: 'Pesquisa e Desenvolvimento' },
    { id: 8, nomeDepartamento: 'Logística' },
    { id: 9, nomeDepartamento: 'Compras' },
    { id: 10, nomeDepartamento: 'Jurídico' },
    { id: 11, nomeDepartamento: 'Administração' },
  ];

  private lastId: number =
    this.departamentos.length > 0
      ? Math.max(...this.departamentos.map((d) => d.id))
      : 0;

  constructor() {}

  getDepartamentos(): Departamento[] {
    return this.departamentos.slice();
  }

  getDepartamentoById(id: number): Departamento | undefined {
    return this.departamentos.find((dep) => dep.id === id);
  }

  addDepartamento(departamento: Departamento): void {
    this.lastId++;

    const newDepartamento: Departamento = {
      id: this.lastId,
      nomeDepartamento: departamento.nomeDepartamento,
    };

    this.departamentos.push(newDepartamento);
  }

  updateDepartamento(departamento: Departamento): void {
    const index = this.departamentos.findIndex((d) => d.id === departamento.id);
    if (index !== -1) {
      const updatedDepartamento: Departamento = {
        id: departamento.id,
        nomeDepartamento: departamento.nomeDepartamento,
      };

      this.departamentos = this.departamentos.map((d, i) =>
        i === index ? updatedDepartamento : d
      );
    }
  }

  deleteDepartamento(id: number): void {
    this.departamentos = this.departamentos.filter((d) => d.id !== id);
  }
}
