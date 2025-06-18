"use strict";
// =======================
// Interfacce
// =======================
// =======================
// Classi
// =======================
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} si è iscritto al corso "${corso.titolo}"`);
    }
}
class Corso {
    constructor(titolo, descrizione, settore, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settore = settore;
        this.durata = durata;
        this.iscritti = [];
    }
    aggiungiPartecipante(partecipante) {
        if (!this.iscritti.includes(partecipante)) {
            this.iscritti.push(partecipante);
        }
        else {
            console.log(`${partecipante.nome} ${partecipante.cognome} è già iscritto al corso "${this.titolo}"`);
        }
    }
}
class Azienda {
    constructor(nome, settore, descrizione, posizioniAperte) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            console.log(`${this.nome} offre la posizione di "${posizione}" a ${partecipante.nome} ${partecipante.cognome}`);
        }
        else {
            console.log(`Posizione "${posizione}" non disponibile in ${this.nome}`);
        }
    }
}
// =======================
// Esempio d’uso
// =======================
// Partecipanti
const abdi = new Partecipante("Abdi", "Hassan", "Somalia", "Scuola Superiore", ["Italiano", "Inglese"], "Falegnameria");
const fatou = new Partecipante("Fatou", "Diop", "Senegal", "Liceo", ["Italiano", "Francese"], "Sartoria");
// Corso
const falegnameria = new Corso("Corso di Falegnameria", "Impara le basi del mestiere con artigiani esperti", "Artigianato", 60);
// Azienda
const legnoSacro = new Azienda("Legno Sacro", "Artigianato", "Produzione di mobili in legno su misura", ["Apprendista falegname", "Montatore"]);
// Interazioni
abdi.iscrivitiCorso(falegnameria);
fatou.iscrivitiCorso(falegnameria);
legnoSacro.offriPosizione(abdi, "Apprendista falegname");
legnoSacro.offriPosizione(fatou, "Sarta"); // posizione non esistente
