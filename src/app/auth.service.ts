import { inject, Injectable,signal } from '@angular/core';
import {Auth,browserSessionPersistence,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,signOut,user,User} from '@angular/fire/auth'
import { createUserWithEmailAndPassword, setPersistence, updateProfile } from 'firebase/auth';
import {from, Observable} from 'rxjs'
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)
  currentUserSignal = signal<UserInterface | null | undefined>(undefined)

  register(email:string, username:string, password:string): Observable<void>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth,email,password).then(response => updateProfile(response.user, {displayName: username}))
    return from(promise)
  }
  
  login(email:string, password:string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(()=>{})
    return from(promise)

  }

   logout(): Observable<void>{
        const promise = signOut(this.firebaseAuth)
        return from(promise)
    }
  
}
