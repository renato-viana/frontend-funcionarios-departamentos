import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Departamento,
  DepartamentoService,
} from '../services/departamento.service';

@Component({
  selector: 'app-departamento-cadastro',
  templateUrl: './departamento-cadastro.component.html',
  styleUrls: ['./departamento-cadastro.component.scss'],
})
export class DepartamentoCadastroComponent implements OnInit {
  departamento: Departamento = { id: 0, nomeDepartamento: '' };
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private departamentoService: DepartamentoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      const departamento = this.departamentoService.getDepartamentoById(+id);
      if (departamento) {
        this.departamento = departamento;
        this.isEdit = true;
      }
    }
  }

  salvar(form: NgForm): void {
    if (this.isEdit) {
      this.departamentoService.updateDepartamento(this.departamento);
    } else {
      this.departamentoService.addDepartamento(this.departamento);
    }

    console.log(form.value);
    form.reset();
  }

  novoDepartamento(form: NgForm): void {
    form.reset();
    this.departamento = { id: 0, nomeDepartamento: '' };
    this.isEdit = false;
  }
}
