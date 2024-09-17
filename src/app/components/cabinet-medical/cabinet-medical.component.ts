import { Component } from '@angular/core';

@Component({
  selector: 'app-cabinet-medical',
  standalone: true,
  imports: [],
  templateUrl: './cabinet-medical.component.html',
  styleUrl: './cabinet-medical.component.css'
})
export class CabinetMedicalComponent {
  isModalOpen=false;
  modalImage:string=''
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

  openModal(url:string){
    this.isModalOpen=true
    this.modalImage=url
  }

  closeModal(){
    this.isModalOpen=false
    this.modalImage=''
  }




}
