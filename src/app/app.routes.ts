import { Routes } from '@angular/router';
import { AproposComponent } from './components/apropos/apropos.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ProjetComponent } from './components/projet/projet.component';
import { CompetenceComponent } from './components/competence/competence.component';
import { ContactComponent } from './components/contact/contact.component';
import { CabinetMedicalComponent } from './components/cabinet-medical/cabinet-medical.component';
import { IbeComponent } from './components/ibe/ibe.component';

export const routes: Routes = [
    {path:'acceuil', component:AcceuilComponent, children:[
        {path:'propo', component:AproposComponent},
        {path:'competence', component:CompetenceComponent},
        {path:'projets', component:ProjetComponent},
        {path:'contact', component:ContactComponent},
    ]},
    {path:'home', component:IbeComponent},
    {path:'cabinet', component:CabinetMedicalComponent},
    {path:'myImmobilier', component:CabinetMedicalComponent},
    {path:'',pathMatch:'full', redirectTo:'home'}
    
];
