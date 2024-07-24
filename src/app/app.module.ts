import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartamentoCadastroComponent } from './departamento-cadastro/departamento-cadastro.component';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNGModule } from './prime-ngmodule/prime-ngmodule.module';

import { routes } from './app.routes';
import { DepartamentoService } from './services/departamento.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DepartamentosPesquisaComponent,
    DepartamentoCadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNGModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DepartamentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
