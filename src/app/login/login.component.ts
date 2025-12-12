import { Component, inject,signal } from '@angular/core';
import { RouterOutlet,Router,RouterModule,RouterLink } from '@angular/router';

import { AuthService } from '../auth.service';
import { FormsModule,Validators,ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

 fb = inject(FormBuilder)
 http = inject(HttpClient)
 router = inject(Router)
 authService = inject(AuthService)

 form = this.fb.nonNullable.group({
  email : ['', Validators.required],
  password: ['',Validators.required],
 })

  errorMessage: string | null = null;

 onSubmit(): void {
  const rawForm = this.form.getRawValue()
  this.authService.login(rawForm.email, rawForm.password).subscribe({
    next: () => {
    this.router.navigateByUrl('/products')
  },
   error: (err) => {
    this.errorMessage = err.code
   },
  })
 }

}
