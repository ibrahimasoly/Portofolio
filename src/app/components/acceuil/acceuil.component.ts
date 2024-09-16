import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AproposComponent } from '../apropos/apropos.component';
import { CompetenceComponent } from '../competence/competence.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { ProjetComponent } from '../projet/projet.component';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    RouterOutlet, ProjetComponent, AproposComponent, CompetenceComponent,
    FooterComponent, HeaderComponent, PresentationComponent, ProjetComponent,
    ContactComponent
  ],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

}
