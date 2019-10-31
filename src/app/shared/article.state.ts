import { AddArticle, DelArticle, DtlArticle } from './article.action';
import { ArticleStateModel } from './article.state.model';
import { Selector, Action, StateContext, State } from '@ngxs/store';
import { Article } from '../models/article';

@State<ArticleStateModel>({
    name: 'articles',
    defaults: {
        articles: [],
        detail: new Article()
    }
})


export class ArticlesState {
    id: number = 0;

    @Selector()
        static getArticles(state: ArticleStateModel)
        {
            return state.articles;
        }

    @Action(AddArticle)
        add({getState, patchState}: StateContext<ArticleStateModel>, {payload} : AddArticle){
                        
            const state = getState();

            payload.id = this.id++;
            console.log(payload);
            patchState({
                articles: [...state.articles, 
                    {
                        ...payload,
                        id: this.id
                    }
                ]
            })
        }

    @Action(DelArticle)
        del({getState, patchState}: StateContext<ArticleStateModel>, {payload} : DelArticle){
                        
            const state = getState();

            const index = state.articles.findIndex(order => order.id === payload.id);
            if(index < 0) return;
                
            patchState({ articles: [
                ...state.articles.slice(0, index),
                ...state.articles.slice(index + 1),] });
          }

    @Action(DtlArticle)
        dtl({getState, patchState}: StateContext<ArticleStateModel>, {payload} : DtlArticle){
         
            patchState({ detail: payload });
        }
}