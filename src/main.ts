import { Partecipante } from "./models/Partecipante";
import { Corso } from "./models/Corso";
import "../style.css";


function salvaPartecipanti() {
  localStorage.setItem("partecipanti", JSON.stringify(corso.iscritti));
}

function caricaPartecipanti() {
  const salvati = localStorage.getItem("partecipanti");
  if (salvati) {
    const dati = JSON.parse(salvati);
    dati.forEach((p: any) => {
      const partecipante = new Partecipante(
        p.nome,
        p.cognome,
        p.paeseOrigine,
        p.livelloIstruzione,
        p.competenzeLinguistiche,
        p.ambitoInteresse
      );
      partecipante.iscrivitiCorso(corso);

      const li = document.createElement("li");
      li.textContent = `${partecipante.nome} ${partecipante.cognome} (${partecipante.paeseOrigine}) - Ambito: ${partecipante.ambitoInteresse}`;
      lista.appendChild(li);

      const option = document.createElement("option");
      option.value = partecipante.cognome;
      option.text = `${partecipante.nome} ${partecipante.cognome}`;
      selectPartecipante.appendChild(option);
    });
  }
}


// Corso predefinito
const corso = new Corso(
  "Corso di Sartoria",
  "Corso pratico di cucito e confezionamento abiti",
  "Moda",
  100
);

// Selettori
const form = document.getElementById("form-partecipante") as HTMLFormElement;
const lista = document.getElementById("lista-partecipanti") as HTMLUListElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  const cognome = (document.getElementById("cognome") as HTMLInputElement).value;
  const paese = (document.getElementById("paese") as HTMLInputElement).value;
  const istruzione = (document.getElementById("istruzione") as HTMLInputElement).value;
  const lingue = (document.getElementById("lingue") as HTMLInputElement).value
    .split(",")
    .map((l) => l.trim());
  const ambito = (document.getElementById("ambito") as HTMLInputElement).value;

  const nuovoPartecipante = new Partecipante(
    nome,
    cognome,
    paese,
    istruzione,
    lingue,
    ambito
  );

  nuovoPartecipante.iscrivitiCorso(corso);
  salvaPartecipanti();


  const li = document.createElement("li");
  li.textContent = `${nome} ${cognome} (${paese}) - Ambito: ${ambito}`;
  lista.appendChild(li);

  form.reset();

    // Aggiungi partecipante anche alla tendina
    const option = document.createElement("option");
    option.value = nuovoPartecipante.cognome;
    option.text = `${nuovoPartecipante.nome} ${nuovoPartecipante.cognome}`;    
    selectPartecipante.appendChild(option);
  
    form.reset();
  
});

import { Azienda } from "./models/Azienda";
import { IPartecipante } from "./interfaces/IPartecipante";

const formAzienda = document.getElementById("form-azienda") as HTMLFormElement;
const selectPartecipante = document.getElementById("seleziona-partecipante") as HTMLSelectElement;


formAzienda.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeAzienda = (document.getElementById("nomeAzienda") as HTMLInputElement).value;
  const settore = (document.getElementById("settore") as HTMLInputElement).value;
  const descrizione = (document.getElementById("descrizione") as HTMLInputElement).value;
  const posizioni = (document.getElementById("posizioni") as HTMLInputElement).value
    .split(",")
    .map((p) => p.trim());

  const posizioneOfferta = (document.getElementById("posizione-offerta") as HTMLInputElement).value;
  const partecipanteIndex = selectPartecipante.selectedIndex - 1; // -1 per l'opzione placeholder

  if (partecipanteIndex >= 0) {
    const partecipanteSelezionato = corso.iscritti[partecipanteIndex];
    const azienda = new Azienda(nomeAzienda, settore, descrizione, posizioni);

    azienda.offriPosizione(partecipanteSelezionato, posizioneOfferta);

    

    formAzienda.reset();
  }
});

caricaPartecipanti();



