import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'detail-profile', component: DetailProfileComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  {
    path: '', redirectTo: '/profile', pathMatch: 'full' 
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProfileRoutingModule {}
