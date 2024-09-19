import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent{


  constructor(private route:Router){}

  isModalOpen = false;
  modalImage: string = '';

  projects = [
    {
      id:1,
      name: 'Cabinet Medical',
      description: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png',
      lien:'cabinet'
    },
    {
      id:2,
      name: 'Bus Transport',
      description: 'Description du projet 2',
      image: 'assets/images/bus/img1.png',
      lien:'busTransport'
    },
    {
      id:3,
      name: 'Projet 3',
      description: 'Description du projet 3',
      image: 'assets/images/cabinet/img1.png',
      lien:'cabinet'
    }
  ];

  openModal(image: string): void {
    this.modalImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalImage = '';
  }

  openProjet(url:string):void{
    this.route.navigateByUrl(url)
    console.log(url)
  }
}
