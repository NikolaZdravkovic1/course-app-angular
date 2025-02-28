import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";



@Injectable()
export class RecipeService{

    

    private recipes:Recipe[]=[
        new Recipe(
            'Tasty Schnitzle',
            'A super-tasty Schnitzel - just awesome!',
            'https://www.allrecipes.com/thmb/qq9s8jlKplKUDEo3Gtk15EAJpHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg', 
             [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)  
              ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://www.allrecipes.com/thmb/qq9s8jlKplKUDEo3Gtk15EAJpHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg', 
             [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 2)
             ]),
      ];

      constructor (private slService:ShoppingListService){

      }

      ngOnInit(){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}