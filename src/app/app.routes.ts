import { Routes } from '@angular/router';
import { AproposComponent } from './components/apropos/apropos.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ProjetComponent } from './components/projet/projet.component';
import { CompetenceComponent } from './components/competence/competence.component';

export const routes: Routes = [
    {path:'propo', component:AproposComponent},
    {path:'competence', component:CompetenceComponent},
    {path:'projets', component:ProjetComponent},
    {path:'contact', component:AproposComponent},
    {path:'home', component:AcceuilComponent},
    {path:'',pathMatch:'full', redirectTo:'home'}
    
];
