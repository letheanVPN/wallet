import { Component } from '@angular/core';
import {SlideInOutAnimation} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'wallet';

  animationState = 'out';

  toggleSubMenu() {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
