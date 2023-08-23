import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenteAchatComponent } from './vente-achat/vente-achat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { CommerceComponent } from './commerce/commerce.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationsComponent } from './reservations/reservations.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    VenteAchatComponent,
    AccueilComponent,
    LocationComponent,
    ContactComponent,
    CommerceComponent,
    MenuComponent,
    FooterComponent,
    DetailsComponent,
    ReservationsComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    NgbModule,
    NgbDropdownModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    // Ng2SearchPipeModule,

    // ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
