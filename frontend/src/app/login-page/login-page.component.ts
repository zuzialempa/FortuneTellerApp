import { Component, OnInit, ViewChild } from '@angular/core';
import { FortuneTellerService } from '../services/fortune-teller.service';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  showNotLogged: Boolean;
  constructor(
    private router: Router,
    private ftService: FortuneTellerService,
    private cookieService: CookieService
    ) {
      this.showNotLogged = false;
      
     }
  @ViewChild('login') loginInp: any;
  @ViewChild('password') passInp: any;

  ngOnInit(): void {
  }

  loginUser(){
    this.ftService.login(
      this.loginInp.nativeElement.value,
      this.passInp.nativeElement.value
    ).subscribe(
      response => {
        this.showNotLogged = false;
        this.cookieService.set("fortuneTeller", response.id,{
          path: "/"
        });
        this.router.navigate(['/fortuneteller']);
      },
      error => {
        this.showNotLogged = true;
      }
      )
  }

}
