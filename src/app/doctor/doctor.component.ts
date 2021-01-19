import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  public specialtyFilter: string;
  public specialties = ['Ophtalmologiste', 'Radiologue', 'Pédiatre', 'Dentiste'];
  public doctors = [];
  public displayMeeting = false;
  public doctorName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeSpecialty(event): void {
    this.doctors = [
      {'nom':'DR SOPHIE PIERREPONT','specialite':'Ophtalmologiste','disponibilite':true},
      {'nom':'DR Alexandra Dupont','specialite':'Ophtalmologiste','disponibilite':false},
      {'nom':'Dr Alexandre Paul','specialite':'Radiologue','disponibilite':true},
      {'nom':'Dr Nadir Madani','specialite':'Pédiatre', 'disponibilite':false}
    ];
    this.doctors = this.doctors.filter((doctor) => doctor.specialite === event);
    this.displayMeeting = false;
  }

  public displayMeet(name: string): void {
    this.displayMeeting = true;
    this.doctorName = name;
  }

  public confirmMeet(): void {
    const index = this.doctors.findIndex(x => x.nom === this.doctorName);
    this.doctors[index].disponibilite = false;
  }

}
