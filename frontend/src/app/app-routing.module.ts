import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FortuneTellersComponent } from './fortuneTellers/fortunetellers.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FortuneTellerDetailsComponent } from './fortune-teller-details/fortune-teller-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/fortuneteller', pathMatch: 'full' },
  { path: 'fortuneteller', component: FortuneTellersComponent },
  { path: 'fortuneteller/:id', component: FortuneTellerDetailsComponent },
  { path: 'map', component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
