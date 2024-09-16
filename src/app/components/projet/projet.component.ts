import { Component } from '@angular/core';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {

  isModalOpen = false;
  modalImage: string = '';

  projects = [
    {
      id:1,
      name: 'Projet 1',
      description: 'Description du projet 1',
      image: 'assets/images/cabinet/img1.png'
    },
    {
      id:2,
      name: 'Projet 2',
      description: 'Description du projet 2',
      image: 'assets/images/cabinet/img1.png'
    },
    {
      id:3,
      name: 'Projet 3',
      description: 'Description du projet 3',
      image: 'assets/images/cabinet/img1.png'
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
}
