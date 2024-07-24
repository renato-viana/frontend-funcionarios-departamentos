import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    DialogModule,
    SidebarModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    DialogModule,
    SidebarModule,
  ],
})
export class PrimeNGModule {}
