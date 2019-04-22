import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buy-login',
  templateUrl: './buy-login.page.html',
  styleUrls: ['./buy-login.page.scss'],
})
export class BuyLoginPage implements OnInit {
  username
  password
  defaultUsername = "user1";
  defaultPassword = "password1";
  constructor(private router: Router, private nav: NavController) { }

  ngOnInit() {
  }
  login() {
    if (this.username == this.defaultUsername && this.password == this.defaultPassword) {
      // this.router.navigateByUrl("/buy/buy-home");
      this.nav.navigateRoot("/buy/tabs");
    } else {
      alert("用户名或密码错误");
    }

  }

  goBuySignup() {
    this.router.navigateByUrl("/buy/buy-signup");
  }

}
