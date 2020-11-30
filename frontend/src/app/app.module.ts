import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortuneTellersComponent } from './fortuneTellers/fortunetellers.component';
import { FortuneTellerCardComponent } from './fortune-teller-card/fortune-teller-card.component';
import { FortuneTellerDetailsCardComponent } from './fortune-teller-details-card/fortune-teller-details-card.component';
import { FortuneTellerDetailsComponent } from './fortune-teller-details/fortune-teller-details.component';
import { ChatCardComponent } from './chat-card/chat-card.component';
import { MapPageComponent } from './map-page/map-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FortuneTellerDashboardComponent } from './fortune-teller-dashboard/fortune-teller-dashboard.component';
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FortuneTellerCardComponent,
    FortuneTellerDetailsCardComponent,
    FortuneTellerDetailsComponent,
    FortuneTellersComponent,
    ChatCardComponent,
    MapPageComponent,
    LoginPageComponent,
    FortuneTellerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule
    // SocketIoModule.forRoot(config)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
