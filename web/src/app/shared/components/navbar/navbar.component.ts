import {Component, HostListener, OnInit} from '@angular/core';
import {LocalStorage} from "../../functions/LocalStorage";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {UserRole} from "../../models/UserRole";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen: Boolean = false;
  isLogged: Boolean = false;
  pagesWithoutLoginButton: String[] = ['/auth', '/admin/auth']
  showButtonLogin: Boolean = true;
  isAdmin: Boolean = false;
  showNavbar: Boolean = true;

  user: any = {
    image: null
  }

  constructor(private storage: LocalStorage, private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.verifyIfShowButton();
        this.getInfoClient();
        this.verifyIfshowNavbar()
      }
    });
  }

  ngOnInit(): void {
    this.verifyIsLogged()
  }

  verifyIfShowButton(): void {
    let page = window.location.pathname

    this.showButtonLogin = !this.pagesWithoutLoginButton.includes(page)
  }

  verifyIfshowNavbar(): void {
    let page = window.location.pathname
    let regex = /\/film\/\w\/\w+/g

    this.showNavbar = !regex.test(page)
  }


  verifyIsAdmin(): void {
    this.isAdmin = this.user.role === UserRole.admin();
  }

  getInfoClient(): void {
    let token = this.storage.lsGet('auth')
    if(token){
      try{
        let user: any = jwtDecode(token);
        user = JSON.parse(user.sub)
        this.user = user
        this.isLogged = true;
        this.verifyIsAdmin();
      }catch{
        console.log("Error")
      }
    }

  }

  verifyIsLogged(): void {
    const client = this.storage.lsGet('auth')
    this.isLogged = !!client;
  }

  toggleMenuUser(): void {
    this.menuOpen = !this.menuOpen;
  }

  makeLoggout(): void {
    this.storage.lsClear()
    location.reload()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(!this.showNavbar){
      return;
    }

    let element = document.querySelector('#navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
