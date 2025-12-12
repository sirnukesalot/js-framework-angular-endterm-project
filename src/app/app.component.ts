import { Component,inject,OnInit, signal } from '@angular/core';
import { RouterOutlet,RouterLink, RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { signOut } from 'firebase/auth';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

   authService = inject(AuthService)

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            if (user) {
                this.authService.currentUserSignal.set({
                    email: user.email!,
                    username: user.displayName!
                })
            }
            else {
                this.authService.currentUserSignal.set(null)
            }
        })
    }
    logout(): void {
        this.authService.logout()
    }
 
}
