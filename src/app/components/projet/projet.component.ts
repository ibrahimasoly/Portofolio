import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [NgClass],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent{


  constructor(private route:Router){}

  isModalOpen = false;
  modalImage: string = '';
  n=0;

  projects = [
    {
      id:1,
      name: 'Cabinet Medical',
      description: "L'application Cabinet-Médical permet d'aider les professionnels de santé, tels que les médecins généralistes et spécialistes, à mieux gérer leur cabinet. Elle simplifie des tâches importantes comme l'accès aux dossiers des patients, la gestion des rendez-vous, le suivi des consultations, et la communication entre les différents intervenants médicaux.",
      image: 'assets/images/cabinet/img1.png',
      lien:'cabinet'
    },
    {
      id:2,
      name: 'Bus Transport',
      description: "Cette application facilite la réservation de billets de bus en éliminant le besoin de se rendre en agence. Les utilisateurs peuvent réserver et payer leurs billets en ligne via leur téléphone, et reçoivent un ticket numérique avec un QR code pour vérifier la validité à l'arrivée.",
      image: 'assets/images/bus/img1.png',
      lien:'busTransport'
    },
    {
      id:3,
      name: 'My Logement',
      description: "My Logement permet aux utilisateurs de consulter le site et de faire des demandes immobilières en tant que clients. Les fournisseurs peuvent également s'inscrire sur la plateforme pour y ajouter les informations concernant leurs logements. L'application intègre des API d'intelligence artificielle (IA) qui vérifient l'authenticité des images fournies par les fournisseurs et confirment la présence du bâtiment à l'adresse indiquée.",
      image: 'assets/images/logement/img1.png',
      lien:'myLogoment'
    },
    {
      id:4,
      name: 'Backend E-commerce micro-service',
      description: "Backend e-commerce microservices a été implementer en Java et Spring Boot, utilisant Eureka Discovery, OpenFeign, Kafka, et deux bases de données (MySQL, MongoDB). La communication entre services est à la fois synchrone (REST API) et asynchrone (Kafka), avec une gestion des pannes grâce à Resilience4j.",
      image: 'assets/images/back_ecom/image9.png',
      lien:'ecommerce'
    }
  ];

  openModal(image: string): void {
    this.modalImage = image;
    this.isModalOpen = true;
    if(image=='assets/images/bus/img1.png'){
      this.n=2
    };
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalImage = '';
    this.n=0;
  }

  openProjet(url:string):void{
    this.route.navigateByUrl(url)
    console.log(url)
  }
}
