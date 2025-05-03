import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Corso implements ICorso {
  public iscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durataOre: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.iscritti.push(partecipante);
  }
}
