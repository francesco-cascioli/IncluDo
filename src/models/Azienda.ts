import { IAzienda } from "../interfaces/IAzienda";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Azienda implements IAzienda {
  constructor(
    public nome: string,
    public settore: string,
    public descrizione: string,
    public posizioniAperte: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    if (this.posizioniAperte.includes(posizione)) {
      console.log(
        `L'azienda ${this.nome} offre a ${partecipante.nome} ${partecipante.cognome} la posizione: ${posizione}`
      );
    } else {
      console.log(
        `La posizione "${posizione}" non è disponibile presso ${this.nome}.`
      );
    }
  }
}
