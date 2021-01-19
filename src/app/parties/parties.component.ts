import { Component, OnInit } from '@angular/core';
import { Party } from '../shared/models/party';
import { PartiesService } from '../shared/services/parties.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

  public parties: Party[];
  constructor(private partiesService: PartiesService) { }

  ngOnInit(): void {
    this.partiesService.getAllParties().subscribe((parties: Party[]) => {
      this.parties = parties;
    });
  }

  public updateNbrPlace(event: { partyId: number, nbrReservation: number }): void {
    const index = this.parties.findIndex(x => x.id === event.partyId);
    this.parties[index].nb_place = this.parties[index].nb_place - event.nbrReservation ;
  }

}
