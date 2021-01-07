import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserRoutingModule } from './user-routing.module';
import {TestComponent} from './test.component';


@NgModule({
  declarations: [ProfileComponent,TestComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
