import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AproposComponent } from '../apropos/apropos.component';
import { CompetenceComponent } from '../competence/competence.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProjetComponent } from '../projet/projet.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit {
  ngOnInit(): void {
   
  }

 
}
