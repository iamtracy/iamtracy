import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private navIsFixed: boolean = false;
  private displayProfile: boolean = false;
  private mobileBreakpoint: number = 480;

  constructor(private router: RouterModule, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    let number = this.document.body.clientWidth;
    if (number > this.mobileBreakpoint) {
      this.displayProfile = false;
    }
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = this.document.body.scrollTop;
    let width = this.document.body.clientWidth;
    if (number > 225 || width < this.mobileBreakpoint) {
      this.navIsFixed = true;
      this.displayProfile = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
      this.displayProfile = false;
    }
  }

}
