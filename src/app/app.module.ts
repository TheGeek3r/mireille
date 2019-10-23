import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonePipe } from "./models/phonepipe";
import { HttpClientModule } from '@angular/common/http';  
import { ErreursDirective } from './erreurs.directive';
import { FiltreArticlesComponent } from './filtre-articles/filtre-articles.component';
import { ArticlesPipe } from './models/articles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    RecapitulatifComponent,
    ListeArticlesComponent,
    PhonePipe,
    ErreursDirective,
    FiltreArticlesComponent,
    ArticlesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PhonePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
