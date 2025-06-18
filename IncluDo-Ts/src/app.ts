
interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazione: string;
    iscrivitiCorso(corso: ICorso): void;
  }
  
  interface ICorso {
    titolo: string;
    descrizione: string;
    settore: string;
    durata: number;
    iscritti: IPartecipante[];
    aggiungiPartecipante(partecipante: IPartecipante): void;
  }
  
  class Partecipante implements IPartecipante {
    constructor(
      public nome: string,
      public cognome: string,
      public paeseOrigine: string,
      public livelloIstruzione: string,
      public competenzeLinguistiche: string[],
      public ambitoFormazione: string
    ) {}
  
    iscrivitiCorso(corso: ICorso): void {
      corso.aggiungiPartecipante(this);
      console.log(`${this.nome} ${this.cognome} iscritto a ${corso.titolo}`);
    }
  }
  
  class Corso implements ICorso {
    iscritti: IPartecipante[] = [];
  
    constructor(
      public titolo: string,
      public descrizione: string,
      public settore: string,
      public durata: number
    ) {}
  
    aggiungiPartecipante(partecipante: IPartecipante): void {
      if (!this.iscritti.includes(partecipante)) {
        this.iscritti.push(partecipante);
      }
    }
  }
  
 
  function salvaPartecipanti(lista: IPartecipante[]) {
    localStorage.setItem("partecipanti", JSON.stringify(lista));
  }
  
  function caricaPartecipanti(): Partecipante[] {
    const dati = localStorage.getItem("partecipanti");
    if (!dati) return [];
    return JSON.parse(dati).map((p: any) => new Partecipante(
      p.nome, p.cognome, p.paeseOrigine, p.livelloIstruzione, p.competenzeLinguistiche, p.ambitoFormazione
    ));
  }
  
 
  const partecipanti = caricaPartecipanti();
  
  const corsoDefault = new Corso(
    "Corso di Falegnameria",
    "Impara con artigiani esperti",
    "Artigianato",
    60
  );
  

  const formPartecipante = document.getElementById("form-partecipante") as HTMLFormElement;
  
  formPartecipante.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const cognome = (document.getElementById("cognome") as HTMLInputElement).value;
    const paese = (document.getElementById("paese") as HTMLInputElement).value;
    const istruzione = (document.getElementById("istruzione") as HTMLInputElement).value;
    const lingue = (document.getElementById("lingue") as HTMLInputElement).value.split(",").map(l => l.trim());
    const ambito = (document.getElementById("ambito") as HTMLInputElement).value;
  
    const nuovo = new Partecipante(nome, cognome, paese, istruzione, lingue, ambito);
    nuovo.iscrivitiCorso(corsoDefault);
    partecipanti.push(nuovo);
    salvaPartecipanti(partecipanti);
  
    formPartecipante.reset();
  });
  
 
  const formCorso = document.getElementById("form-corso") as HTMLFormElement;
  
  formCorso.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const titolo = (document.getElementById("titoloCorso") as HTMLInputElement).value;
    const descrizione = (document.getElementById("descrizioneCorso") as HTMLInputElement).value;
    const settore = (document.getElementById("settoreCorso") as HTMLInputElement).value;
    const durata = parseInt((document.getElementById("durataCorso") as HTMLInputElement).value);
  
    const nuovoCorso = new Corso(titolo, descrizione, settore, durata);
    alert(`Corso "${nuovoCorso.titolo}" creato con successo!`);
  
    formCorso.reset();
  });
  