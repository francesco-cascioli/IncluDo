import { IPartecipante } from "../interfaces/IPartecipante";
import { ICorso } from "../interfaces/ICorso";

export class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseOrigine: string,
    public livelloIstruzione: string,
    public competenzeLinguistiche: string[],
    public ambitoInteresse: string
  ) {}

  iscrivitiCorso(corso: ICorso): void {
    corso.aggiungiPartecipante(this);
  }
}
