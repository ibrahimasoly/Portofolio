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
      title:"Réservation en ligne des billets",
      technologies:" Permet aux utilisateurs de réserver facilement des billets de bus directement depuis leur téléphone, sans avoir à se déplacer dans une agence."
    },
    {
      id:2,
      title:"Tableau de bord interactif",
      technologies:"Vue d’ensemble des réservations, incluant les trajets sélectionnés, les paiements effectués, et les billets validés."
    },
    {
      id:3,
      title:"Authentification des billets",
      technologies:"Les billets contiennent un QR code scanné à l’agence pour vérifier leur authenticité et leur validité en temps réel."
    },
    {
      id:4,
      title:"Optimisation du transport",
      technologies:"Réduction des temps d’attente et des déplacements inutiles grâce à la réservation en ligne, simplifiant ainsi l’accès aux services de transport interrégionaux au Mali."
    },
    {
      id:5,
      title:"Sécurité et fiabilité ",
      technologies:"Transactions sécurisées et informations fiables sur les trajets, garantissant une expérience utilisateur optimale."
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
