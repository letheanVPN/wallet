import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: any[] = [];

  ngOnInit() {
    // navbar items
    this.items = [
      {
        label: 'HOME',
        icon: 'pi pi-home'
      },
      {
        label: 'STAKING',
        icon: 'pi pi-home'
      },
    ];
  }
}
