import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isActive: boolean = false;

  constructor(private router: Router) {
    
  }

  toggleContainer() {
    this.isActive = !this.isActive;
  }
  
  login(){
    this.router.navigate(['/home']);
  }
  signup(){
    this.router.navigate(['/home']);    
  }
}
