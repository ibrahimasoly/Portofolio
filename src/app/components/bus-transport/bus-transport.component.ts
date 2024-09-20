import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-bus-transport',
  standalone: true,
  imports: [],
  templateUrl: './bus-transport.component.html',
  styleUrl: './bus-transport.component.css'
})
export class BusTransportComponent implements OnInit {
  isModalOpen=false;
  modalImage:string=''
  currentIndex = 0;
  projects = [
    {
      id:1,
      explication: 'Recherche des bus ',
      image: 'assets/images/bus/img1.png',
    },
    {
      id:2,
      explication: 'Choix du lieu de depart',
      image: 'assets/images/bus/img2.png',
    },
    {
      id:3,
      explication: "Choix du lieu d'arriver",
      image: 'assets/images/bus/img3.png',
    },
    {
      id:4,
      explication: 'Choix de la date de depart',
      image: 'assets/images/bus/img4.png',
    },
    {
      id:5,
      explication: 'Chargement',
      image: 'assets/images/bus/img5.png',
    },
    {
      id:6,
      explication: "Liste des voyages disponible" ,
      image: 'assets/images/bus/img6.png',
    },
    {
      id:7,
      explication: "Remplissage des informations du passager" ,
      image: 'assets/images/bus/img7.png',
    },
    {
      id:8,
      explication: "Payment" ,
      image: 'assets/images/bus/img8.png',
    },
    {
      id:9,
      explication: "Ticket" ,
      image: 'assets/images/bus/img9.png',
    },
  ];

  langages=[
    {
      id:1,
      technologies:"Frontend : Flutter(Dart)."
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
