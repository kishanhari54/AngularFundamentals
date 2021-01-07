import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { TestComponent } from './test.component';
const routes: Routes = [
  {
    path: '',component:ProfileComponent,
    children: [
      {path:'test',component:TestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
