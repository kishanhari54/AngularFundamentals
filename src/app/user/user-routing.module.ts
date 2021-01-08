import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { TestComponent } from './test.component';
import { LoginComponent } from './login.component';
import { EditProfileGuardGuard } from '../shared/guard/edit-profile-guard.guard';
const routes: Routes = [
  /* {
    path: '',
    children: [
      {path:'',component:LoginComponent},
      {path:'profile',component:ProfileComponent,children: [{path:'test',component:TestComponent}]}

    ]
  }, */

  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[EditProfileGuardGuard] ,children: [{path:'test',component:TestComponent}]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
