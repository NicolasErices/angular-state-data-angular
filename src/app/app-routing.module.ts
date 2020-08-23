import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path: '', redirectTo: 'profile', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '404', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }