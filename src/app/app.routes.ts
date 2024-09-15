import { Routes } from '@angular/router';
import { AproposComponent } from './components/apropos/apropos.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

export const routes: Routes = [
    {path:'propo', component:AproposComponent},
    {path:'home', component:AcceuilComponent},
    {path:'',pathMatch:'full', redirectTo:'home'}
    
];
