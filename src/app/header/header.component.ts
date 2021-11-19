import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <a class="navbar-brand p-2" href=""> Calculator Skeleton </a>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
