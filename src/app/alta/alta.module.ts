// alta.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AltaPage } from './alta.page';
import { AltaPageRoutingModule } from './alta-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaPageRoutingModule
  ],
  declarations: [AltaPage],
})
export class AltaPageModule {}
