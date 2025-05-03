import { IPartecipante } from "./IPartecipante";

export interface IAzienda {
  nome: string;
  settore: string;
  descrizione: string;
  posizioniAperte: string[];

  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
