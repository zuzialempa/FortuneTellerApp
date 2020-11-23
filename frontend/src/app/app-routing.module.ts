import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FortuneTellersComponent } from './fortuneTellers/fortunetellers.component';

const routes: Routes = [
  { path: '', component: FortuneTellersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
