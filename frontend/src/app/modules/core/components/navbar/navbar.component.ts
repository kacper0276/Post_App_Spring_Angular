import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true);
  }
  onScroll($event: Event) {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbarElement = document.querySelector('.navigation-list');

    console.log('scrolling');
    if (navbarElement) {
      console.log(scrollTop);

      // if (scrollTop > 500) {
      //   this.renderer.addClass(navbarElement, 'scrolled');
      // } else {
      //   this.renderer.removeClass(navbarElement, 'scrolled');
      // }
    }
  }
}
