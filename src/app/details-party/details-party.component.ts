import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Party } from '../shared/models/party';

@Component({
  selector: 'app-details-party',
  templateUrl: './details-party.component.html',
  styleUrls: ['./details-party.component.scss']
})
export class DetailsPartyComponent implements OnInit {

  @Input() party: Party;
  @Output() reservationRequest = new EventEmitter<{ partyId: number, nbrReservation: number }>();
  public displayBloc = false;
  public reservationNbr: number;
  constructor() { }

  ngOnInit(): void {
  }

  public validReservation(party: Party): void {
    if (party.nb_place > this.reservationNbr) {
      this.reservationRequest.emit({ partyId: party.id, nbrReservation: this.reservationNbr});
    }
  }

}
