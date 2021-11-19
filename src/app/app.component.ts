import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-calculator-form></app-calculator-form>
    <app-body></app-body>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'testing';
}
