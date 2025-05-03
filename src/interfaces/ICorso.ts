import { IPartecipante } from "./IPartecipante";

export interface ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durataOre: number;
  iscritti: IPartecipante[];

  aggiungiPartecipante(partecipante: IPartecipante): void;
}
