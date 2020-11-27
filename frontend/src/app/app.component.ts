import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FortuneTeller App';
  isFT = false;

  constructor(private cookieService: CookieService) {
    const fortuneTeller = this.cookieService.get("fortuneTeller");
    this.isFT = fortuneTeller !== undefined && fortuneTeller !== '';
  }
  
  logout() {
    this.cookieService.delete("fortuneTeller");
    console.log("xxx", this.cookieService.get("fortuneTeller"))
    this.isFT = false;
  }
}
