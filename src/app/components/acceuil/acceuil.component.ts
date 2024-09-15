import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjetComponent } from '../projet/projet.component';
import { AproposComponent } from '../apropos/apropos.component';
import { CompetenceComponent } from '../competence/competence.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { ContactComponent } from "../contact/contact.component";

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
