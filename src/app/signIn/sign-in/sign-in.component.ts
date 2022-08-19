import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/_models/admin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  login: Admin = new Admin();
  constructor(private loginService: LoginService,private router:Router) {}

  ngOnInit(): void {}
  signIn() {
    this.loginService.login(this.login).subscribe(
      (a) => {
        let decoded:any = jwtDecode(a)
        console.log(decoded)
        localStorage.setItem("teamId",decoded.teamId)
        localStorage.setItem("userName",decoded.username)
        if(decoded.teamId=="0"){
          this.router.navigateByUrl("/supervisor")
        }else{
          this.router.navigateByUrl("/TeamList")
        }
      },
      (r) => {
        console.log(r);
        alert(r.error)
      }
    );
  }
}
function jwt_decode(token: any): Token {
  throw new Error('Function not implemented.');
}

