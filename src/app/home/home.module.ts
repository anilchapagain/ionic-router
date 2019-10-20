import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CustomModule } from '../Module/custom/custom.module';
import { HomeRoutingModule } from './home-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CustomModule,
    HomeRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
