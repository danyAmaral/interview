import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { Component1Component } from './components/component-1/component-1.component';


const routes: Routes = [
  { path: '', component: Component1Component }, 
  { path: 'home', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }