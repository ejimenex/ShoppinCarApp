import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animation/animation';
import { trigger, transition, animate, query, style } from '@angular/animations';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  //template: '[@routeAnimations]="prepareRoute(outlet)" <router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

   this.router.navigate(['/product'])
  

  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
