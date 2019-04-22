import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-signup',
  templateUrl: './buy-signup.page.html',
  styleUrls: ['./buy-signup.page.scss'],
})
export class BuySignupPage implements OnInit {
  username
  password
  defaultUsername = "user1";
  defaultPassword = "password1";
  constructor(private router: Router) { }

  ngOnInit() {

  }

  signup() {
    this.router.navigateByUrl("/buy/tabs")
  }

}
