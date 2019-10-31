import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router' 
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
import { NgxsModule } from '@ngxs/store';
import { from } from 'rxjs';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesState } from './shared/article.state';

const routes: Routes = [
  {
    path: '', 
    component : AccueilComponent,
  },
  {
    path: 'register',
    loadChildren : './formulaire/formulaire.module#FormulaireModule',
  },
  {
    path: 'listeArticles',
    loadChildren : './liste-articles/liste-articles.module#ListeArticlesModule',
  },
  {
    path: 'panier',
    loadChildren : './panier/panier.module#PanierModule',
  },
  {
    path: 'detail',
    loadChildren : './detail/detail.module#DetailModule'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([ArticlesState]),
  ],
  providers: [PhonePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
