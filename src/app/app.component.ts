import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
   @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let header = document.querySelector("header");
   header?.classList.toggle("sticky", window.scrollY > 0 )
  }
}
