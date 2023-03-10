import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-emploi-component',
  templateUrl: './offre-emploi-component.component.html',
  styleUrls: ['./offre-emploi-component.component.css']
})
export class OffreEmploiComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  listeEmploi=[
    {reference:"001" ,titre:"software programmer",entreprise:"vermeg",etat:true},
    { reference:"002" ,titre:"data analyst",entreprise:"vermeg",etat:false},
    { reference:"003" ,titre:"Cloud developper",entreprise:"vermeg",etat: true},

   
  ];

  calculerBilan() {
    const nbNonCloturees = this.listeEmploi.filter(offre => offre.etat === true).length;
    alert(`Il y a ${nbNonCloturees} offres d'emploi non clôturées.`);
  }

  nomEntrepriseRecherchee: string = '';
  offresFiltrees: any[] = [];

  rechercherOffres(event: any) {
    event.preventDefault();
    this.offresFiltrees = this.listeEmploi.filter(offre => offre.entreprise.toLowerCase().includes(this.nomEntrepriseRecherchee.toLowerCase()));
  }
}
