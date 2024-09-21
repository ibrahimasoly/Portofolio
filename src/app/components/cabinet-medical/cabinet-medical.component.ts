import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-cabinet-medical',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cabinet-medical.component.html',
  styleUrl: './cabinet-medical.component.css'
})
export class CabinetMedicalComponent implements OnInit {
  isModalOpen=false;
  modalImage:string=''
  currentIndex = 0;
  projects = [
    {
      id:1,
      explication: 'page de connexion en tant que medecin',
      image: 'assets/images/cabinet/img2.png',
    },
    {
      id:2,
      explication: 'Liste des patients',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:3,
      explication: 'Les patient qui ont des RDVs',
      image: 'assets/images/cabinet/img3.png',
    },
    {
      id:4,
      explication: 'Les patients qui ont été consulter',
      image: 'assets/images/cabinet/img4.png',
    },
    {
      id:5,
      explication: 'les informations sur le patient consulter',
      image: 'assets/images/cabinet/img5.png',
    },
    {
      id:6,
      explication: "Creation d'ordonnance pour le patient consulter" ,
      image: 'assets/images/cabinet/img6.png',
    },
    {
      id:7,
      explication: "Ajouter un patient" ,
      image: 'assets/images/cabinet/img7.png',
    },
    {
      id:8,
      explication: "Ajouter un RDV" ,
      image: 'assets/images/cabinet/img8.png',
    },
    {
      id:9,
      explication: "Ajouter une consultation" ,
      image: 'assets/images/cabinet/img9.png',
    },
    {
      id:10,
      explication: "Dossier medical" ,
      image: 'assets/images/cabinet/img10.png',
    },
  ];

  langages=[
    {
      id:1,
      technologies:"Frontend : Angular(HTML5, SCSS, TypeScript), Bootstrap."
    },
    {
      id:2,
      technologies:"Backend : Spring Boot (Java)."
    },
    {
      id:3,
      technologies:"Base de données : Mysql."
    },
    {
      id:4,
      technologies:"Contrôle de version : Git."
    },
  ];
  fonctions=[
    {
      id:1,
      title:"Gestion des patients",
      technologies:"Enregistrement des patients."
    },
    {
      id:2,
      title:"Prise de rendez-vous",
      technologies:"Prise et gestion des rendez-vous des patients, soit directement au cabinet, soit par téléphone. Les informations de la prise de rendez-vous incluent le nom, prénom, et la date et heure souhaitée, avec un ajustement selon la disponibilité du médecin."
    },
    {
      id:3,
      title:"Gestion des consultations",
      technologies:"Ajout et gestion des consultations médicales via un formulaire interactif, comprenant l’enregistrement des nouveaux patients, la gestion des fiches médicales existantes, et la mise à jour des antécédents médicaux pour chaque consultation."
    },
    {
      id:4,
      title:"Création d'ordonnances",
      technologies:" Émission et gestion des prescriptions médicales."
    },
    {
      id:5,
      title:"Gestion de la comptabilité",
      technologies:"Ajout et gestion des recettes du cabinet, incluant les frais de consultation et les dépenses associées (achat de médicaments, factures, fournitures). Les pièces justificatives sont archivées pour garantir la transparence financière."
    },
    {
      id:6,
      title:"Tableau de bord pour la secrétaire",
      technologies:"Vue d'ensemble des rendez-vous et du nombre de patients prévus pour la journée."
    },
    {
      id:7,
      title:"Tableau de bord pour le médecin",
      technologies:"Vue d'ensemble des consultations de la journé, ordonnances et factures."
    },
  ];

  ngOnInit(): void {
    new Swiper('.swiper', {
      loop: true,
      slidesPerView:3,
      spaceBetween:20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      
      breakpoints:{
        320: {
          slidesPerView:1,
        },
        667: {
          slidesPerView:2,
        },
        768: {
          slidesPerView:2,
        },
        960:{
          slidesPerView:2,
        },
        1200:{
          slidesPerView:3,
        },
      }
    }
    );
  }


  openModal(url:string){
    this.isModalOpen=true
    this.modalImage=url
  }

  closeModal(){
    this.isModalOpen=false
    this.modalImage=''
  }

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.projects.length - 1 : this.currentIndex - 1;
    console.log(this.currentIndex)
  }
  
  // Fonction pour aller à l'image suivante
  nextImage() {
    this.currentIndex = (this.currentIndex === this.projects.length - 1) ? 0 : this.currentIndex + 1;
    console.log(this.currentIndex)
  }

  


}
