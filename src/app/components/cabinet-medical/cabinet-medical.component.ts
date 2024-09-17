import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-cabinet-medical',
  standalone: true,
  imports: [],
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
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:2,
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:3,
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:4,
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:5,
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
    },
    {
      id:6,
      explication: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
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
  }

  // Fonction pour aller à l'image suivante
  nextImage() {
    this.currentIndex = (this.currentIndex === this.projects.length - 1) ? 0 : this.currentIndex + 1;
  }

  


}
