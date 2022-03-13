import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) { 
    this.userCollection = firestore.collection('users');
  }

  public getUsers():any{
    return this.userCollection.snapshotChanges();
  }

  addUser(user: User):Promise<any> {
    return this.userCollection.add(user);
  }
}
