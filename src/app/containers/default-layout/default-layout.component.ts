import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from '../../constant/param';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  public sidebarMinimized = false;
  navItems= navItems;
  user: string;
  newPasword: string;
  constructor(private _router: Router,  private _modalService: NgbModal
    ) {
   
    this.navItems=navItems
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;


  }
 
  
  logOut() {
    this._router.navigate(['/login']);
    window.location.reload();
  }
}
