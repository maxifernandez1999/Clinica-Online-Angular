import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/Patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.scss']
})
export class RegisterPatientsComponent implements OnInit {

  patients:Patient[];
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.getPatientsToRegisterPatients();
  }

  public getPatientsToRegisterPatients(): void{
    this.patientService.getPatients().subscribe(response => {
      this.patients = response;
    })
  }

}
