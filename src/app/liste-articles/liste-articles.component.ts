import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Article } from '../models/article';
import { Store } from '@ngxs/store';
import { AddArticle, DtlArticle } from '../shared/article.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.sass']
})
export class ListeArticlesComponent implements OnInit {

  constructor(private articleService : ArticleService, private store : Store, private router : Router) { }
  articles : Article[] = [];
  inputFiltre : string = "";
  type : string = "";

  //articles : Observable<Article[]>;
  /*articlesFiltres : Observable<Article[]>;
  filtre : FormControl;
  filtres : Observable<string>;
  selection : FormGroup;*/


  ngOnInit() 
  {
    this.articleService.getListeArticles().subscribe(value => this.articles = value);
  }

  public majType(type: string) 
  {
    this.type = type;
  }

  public majFiltre(filte: string) 
  {
   this.inputFiltre = filte;
  }


  ajouterAuPanier(article: Article)
  {
      this.addArticle (article);
  }

  addArticle(article: Article)
  {
    this.store.dispatch(new AddArticle(article));
  }

  detailArticle(article: Article)
  {
    this.dtlArticle (article);
    this.router.navigate(['/detail']);  
  }

  dtlArticle(article: Article)
  {
    this.store.dispatch(new DtlArticle(article));
  }

}
