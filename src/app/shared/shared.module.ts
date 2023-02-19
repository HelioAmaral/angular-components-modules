import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  //export the DividerComponent so we can import and use it in another modules
  exports: [DividerComponent],
})
export class SharedModule {}
