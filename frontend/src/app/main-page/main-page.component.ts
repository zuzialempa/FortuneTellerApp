import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isFT = false;

  constructor(private cookieService: CookieService) {
    const fortuneTeller = this.cookieService.get("fortuneTeller");
    this.isFT = fortuneTeller !== undefined && fortuneTeller !== '';
   }

  ngOnInit(): void {
  }

}
