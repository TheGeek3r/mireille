import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  panier: Observable<Article>;
  nbArticles : number;


constructor(private store: Store) {
    this.store.select(state => state.articles.articles).subscribe (u => this.nbArticles = u.length);
   }

  ngOnInit() {
  }

}
