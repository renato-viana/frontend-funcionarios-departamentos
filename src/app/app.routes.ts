import { Routes } from '@angular/router';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import { DepartamentoCadastroComponent } from './departamento-cadastro/departamento-cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'departamentos', pathMatch: 'full' },
  { path: 'departamentos', component: DepartamentosPesquisaComponent },
  { path: 'departamentos/novo', component: DepartamentoCadastroComponent },
  { path: 'departamentos/:id', component: DepartamentoCadastroComponent },
];
