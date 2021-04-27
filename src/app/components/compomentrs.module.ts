import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { IncrementarComponent } from './incrementar/incrementar.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementarComponent, DonaComponent],
  exports: [IncrementarComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
  ],
})
export class CompomentrsModule {}
