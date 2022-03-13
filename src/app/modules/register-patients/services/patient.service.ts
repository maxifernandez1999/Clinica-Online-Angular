import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/core/models/Patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientCollection: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) { 
    this.patientCollection = firestore.collection('patients');
  }

  public getPatients():Observable<Patient[]>{
    return this.patientCollection.valueChanges() as Observable<Patient[]>;
  }
}
