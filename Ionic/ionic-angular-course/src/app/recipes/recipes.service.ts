import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]=[
    {
      id:'r1',
      title:'Schintzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Neat','Salad']
     },
     {
       id:'r2',
       title:'Spaghetti',
       imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Spaghetti_di_Gragnano_e_colatura_di_alici.jpg/220px-Spaghetti_di_Gragnano_e_colatura_di_alici.jpg',
       ingredients: ['Spaghetti', 'Meat','Tomatoes']
      }
 ];

  constructor() { }

  getAllRecipes(){
    return [... this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(
      recipe =>{
        return recipe.id === recipeId;
      }
    )};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter( recipe =>{
      return recipe.id === recipeId;


    });
  }
}
