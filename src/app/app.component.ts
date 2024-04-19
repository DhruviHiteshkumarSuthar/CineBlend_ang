import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'cineblend';
  constructor(private router: Router){}
  showNavbar(): boolean {
    const currentRoute = this.router.url;
    return !currentRoute.includes('/login');
  }
}
