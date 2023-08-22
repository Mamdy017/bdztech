import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenteAchatComponent } from './vente-achat/vente-achat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { CommerceComponent } from './commerce/commerce.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil', pathMatch: 'full'
  },
  {  path: 'venteAchat', component: VenteAchatComponent },
  {  path: 'accueil', component: AccueilComponent },
  {  path: 'location', component: LocationComponent },
  {  path: 'contact', component: ContactComponent },
  {  path: 'commerce', component: CommerceComponent },
  {  path: 'details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
