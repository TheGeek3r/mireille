import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'articles'
})
export class ArticlesPipe implements PipeTransform {

  transform(articles: Article[], critere: string, type: string) {
    console.log(type);
    if(type == "Type")
      return articles.filter(annonce => { return annonce.categorie.toLowerCase().includes(critere.toLowerCase())})
    else if(type == "PrixSup")
      return articles.filter(article => article.prix > Number(critere == "" ? Number.MIN_SAFE_INTEGER : critere))
    else if(type == "PrixInf")
      return articles.filter(article => article.prix < Number(critere == "" ? Number.MAX_SAFE_INTEGER : critere))
    else if(type == "Pays")
    return articles.filter(annonce => { return annonce.pays.toLowerCase().includes(critere.toLowerCase())})
    else 
      return articles;
  }

}
