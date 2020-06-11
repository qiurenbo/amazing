import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AmButtonModule],
  exports: [AmButtonModule],
  providers: [],
})
export class AmModule {}
