import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Article } from '../models/article';
import { Observable, combineLatest } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';  

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.sass']
})
export class ListeArticlesComponent implements OnInit {

  constructor(private articleService : ArticleService) { }
  articles : Article[] = [];
  inputFiltre : string = "";
  type : string = "";

  //articles : Observable<Article[]>;
  /*articlesFiltres : Observable<Article[]>;
  filtre : FormControl;
  filtres : Observable<string>;
  selection : FormGroup;*/


  ngOnInit() {
    this.articleService.getListeArticles().subscribe(value => this.articles = value);
    }

    public majType(type: string) {
      this.type = type;
    }

    public majFiltre(filte: string) {
      this.inputFiltre = filte;
    }

    /*this.articles = this.articleService.getListeArticles();
    this.filtre = new FormControl('');  
    this.selection = new FormGroup({
      selectionFiltre : new FormControl()
    })
    this.filtres = this.filtre.valueChanges.pipe(startWith(''));

    this.articlesFiltres = combineLatest(this.articles, this.filtres).pipe( 
      map(([articles, filterString]) => 
      { 
        console.log(this.selection.get("selectionFiltre").value);
        if(this.selection.get("selectionFiltre").value == "prixInf")
          return articles.filter(article => article.prix > Number(filterString == "" ? Number.MAX_SAFE_INTEGER : filterString))
        else if(this.selection.get("selectionFiltre").value == "prixSup")
          return articles.filter(article => article.prix < Number(filterString == "" ? Number.MIN_SAFE_INTEGER : filterString))
        return articles;
      }
      ));*/
  
}
