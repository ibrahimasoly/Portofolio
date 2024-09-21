import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-my-logement',
  standalone: true,
  imports: [],
  templateUrl: './my-logement.component.html',
  styleUrl: './my-logement.component.css'
})
export class MyLogementComponent {
  isModalOpen=false;
  modalImage:string=''
  currentIndex = 0;
  projects = [
    {
      id:1,
      explication: "Page d'acceuil ",
      image: 'assets/images/logement/img1.png',
    },
    {
      id:2,
      explication: "Page d'inscription",
      image: 'assets/images/logement/img2.png',
    },
    {
      id:3,
      explication: "Page de connexion",
      image: 'assets/images/logement/img3.png',
    },
    {
      id:4,
      explication: "Page de publication des logements",
      image: 'assets/images/logement/img4.png',
    },
    {
      id:5,
      explication: "Page de publication des logements",
      image: 'assets/images/logement/img5.png',
    },
    {
      id:6,
      explication: "Page de publication des logements",
      image: 'assets/images/logement/img6.png',
    },
    {
      id:7,
      explication: "Verication d'image avec API de reconnaissnace et detection" ,
      image: 'assets/images/logement/img7.png',
    },
    {
      id:8,
      explication: "Page du fournisseur" ,
      image: 'assets/images/logement/img8.png',
    },
    {
      id:9,
      explication: "Information sur un logement" ,
      image: 'assets/images/logement/img9.png',
    },
    {
      id:10,
      explication: "Page de l'administrateur" ,
      image: 'assets/images/logement/img10.png',
    },
  ];

  langages=[
    {
      id:1,
      technologies:"Plateforme : JavaEE."
    },
    {
      id:2,
      technologies:"Langage : Python, HTML, CSS, Javascript."
    },
    {
      id:3,
      technologies:"Backend : Flask ."
    },
    {
      id:4,
      technologies:"Base de données : Mysql."
    },
    {
      id:5,
      technologies:"Contrôle de version : Git."
    },
  ];
  fonctions=[
    {
      id:1,
      title:"Inscription des fournisseurs",
      technologies:" La plateforme permet aux fournisseurs de créer un compte pour accéder aux fonctionnalités."
    },
    {
      id:2,
      title:"Gestion des logements",
      technologies:"Les fournisseurs peuvent ajouter ou supprimer des biens immobiliers (logements) sur la plateforme."
    },
    {
      id:3,
      title:"Consultation des logements",
      technologies:"Les utilisateurs peuvent rechercher et consulter les informations détaillées des logements disponibles."
    },
    {
      id:4,
      title:"Gestion des transactions",
      technologies:"La plateforme offre la possibilité de gérer les transactions et les relations clients/fournisseurs."
    },
    {
      id:5,
      title:"Tableau de bord pour l'administrateur ",
      technologies:"L’administrateur de la plateforme dispose d’un tableau de bord pour gérer les comptes utilisateurs, les annonces et les statistiques sur les transactions."
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
