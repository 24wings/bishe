import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  username = ""
  password = ""
  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  save() {
    this.nav.pop();

  }

  logout() {
    this.nav.navigateRoot("/android-shop")
  }

}
