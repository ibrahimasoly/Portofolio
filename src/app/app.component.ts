import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { AproposComponent } from "./components/apropos/apropos.component";
import { CompetenceComponent } from "./components/competence/competence.component";
import { ProjetComponent } from "./components/projet/projet.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent,
    FooterComponent, PresentationComponent,
    AproposComponent, CompetenceComponent,
    ProjetComponent, RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portofolio';
}
