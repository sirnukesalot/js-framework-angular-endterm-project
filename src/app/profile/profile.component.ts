import { Component,inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
   authService = inject(AuthService)
    router = inject(Router)
    
    logout(): void {
      this.authService.logout();
       this.router.navigateByUrl('/home')
}

}
