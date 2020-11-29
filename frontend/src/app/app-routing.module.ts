import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { FortuneTellerDetailsComponent } from './fortune-teller-details/fortune-teller-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/fortuneteller', pathMatch: 'full' },
  { path: 'fortuneteller', component: MainPageComponent },
  { path: 'fortuneteller/:id', component: FortuneTellerDetailsComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'fortuneteller/test/login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
