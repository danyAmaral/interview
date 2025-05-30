import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component-1/component-1.component';
import { HeaderComponent } from './components/page/header/header.component';
import { SidebarComponent } from './components/page/sidebar/sidebar.component';
import { Component01Component } from './components/page/component-01/component-01.component';
import { Component02Component } from './components/page/component-02/component-02.component';
import { HomeComponent } from './components/page/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HeaderComponent,
    SidebarComponent,
    Component01Component,
    Component02Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
