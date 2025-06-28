import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './Account-routing.module';
import { AccountComponent } from './account.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent]
})
export class Tab3PageModule {}

