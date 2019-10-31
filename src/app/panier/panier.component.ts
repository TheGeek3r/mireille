import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Store } from '@ngxs/store';
import { DelArticle } from '../shared/article.action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.sass']
})
export class PanierComponent implements OnInit {

  panier: Observable<Article>;

  constructor(private store: Store) {
    this.panier = this.store.select(state => state.articles.articles);
   }

  ngOnInit() {
  }

  supprimerDuPanier(article: Article)
  {
      this.delArticle (article);
  }

  delArticle(article: Article)
  {
    this.store.dispatch(new DelArticle(article));
  }
}
