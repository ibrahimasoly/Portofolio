import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-back-ecom',
  standalone: true,
  imports: [],
  templateUrl: './back-ecom.component.html',
  styleUrl: './back-ecom.component.css'
})
export class BackEcomComponent {
  isModalOpen=false;
  modalImage:string=''
  currentIndex = 0;
  projects = [
    {
      id:1,
      explication: "Page discovery service ",
      image: 'assets/images/back_ecom/image9.png',
    },
    {
      id:2,
      explication: "Page du service client",
      image: 'assets/images/back_ecom/image1.png',
    },
    {
      id:3,
      explication: "Page de consultation client",
      image: 'assets/images/back_ecom/image2.png',
    },
    {
      id:4,
      explication: "Page d'inscription clients",
      image: 'assets/images/back_ecom/image3.png',
    },
    {
      id:5,
      explication: "Page du service produit",
      image: 'assets/images/back_ecom/image4.png',
    },
    {
      id:6,
      explication: "Page de consultation produit",
      image: 'assets/images/back_ecom/image6.png',
    },
    {
      id:7,
      explication: "Page du service commande" ,
      image: 'assets/images/back_ecom/image7.png',
    },
    {
      id:8,
      explication: "Page de consultation commande" ,
      image: 'assets/images/back_ecom/image8.png',
    },
    {
      id:9,
      explication: "Page Docker" ,
      image: 'assets/images/back_ecom/image13.png',
    },
  ];

  langages=[
    {
      id:1,
      technologies:"Logiciels et outils : Docker, Kafka, MailDev, Eureka Discovery, Config Server, OpenFeign, RestTemplate, Resilience4j."
    },
    {
      id:2,
      technologies:"Langage : Java."
    },
    {
      id:3,
      technologies:"Backend : Spring boot."
    },
    {
      id:4,
      technologies:"Base de données : Mysql, MongoDB"
    },
    {
      id:5,
      technologies:"Contrôle de version : Git."
    },
  ];
  fonctions=[
    {
      id:1,
      title:"CUSTOMER-SERVICE",
      technologies:"Gérer les utilisateurs , l'inscription, et la gestion des comptes."
    },
    {
      id:2,
      title:"PRODUCT-SERVICE",
      technologies:"Gérer les produits, incluant la mise à jour, l'ajout, et la suppression des articles."
    },
    {
      id:3,
      title:"ORDER-SERVICE",
      technologies:"Gérer le processus de commande, de l'ajout au panier jusqu'à la finalisation de la commande."
    },
    {
      id:4,
      title:"PAYMENT-SERVICE",
      technologies:"Gérer les paiements et les interactions avec les systèmes de paiement."
    },
    {
      id:5,
      title:"NOTIFICATION-SERVICE ",
      technologies:"Gérer les notifications relatives aux commandes, produits, ou autres événements."
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
