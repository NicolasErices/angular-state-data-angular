import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileRoutingModule } from './profile.routes.module';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
@NgModule({
  declarations: [
    ProfileComponent,
    DetailProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
