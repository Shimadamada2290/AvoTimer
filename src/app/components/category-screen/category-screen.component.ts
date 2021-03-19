import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent implements OnInit {

  categories = new Map<String, Recipe[]>();

  ingredients = [
    {
      name: "salt",
      type: "solid",
      weight: null,
      ammount: 1,
      unit: "pinch",
      ingredientId: 0,
    },
    {
      name: "egg",
      type: "solid",
      weight: null,
      amount: 2,
      unit: null,
      ingredientId: 1,
    },
    {
      name: "flour",
      type: "solid",
      weight: 100,
      amount: null,
      unit: "grams",
      ingredientId: 2,
    },
    {
      name: "milk",
      type: "liquid",
      weight: 300,
      amount: null,
      unit: "milliliters",
      ingredientid: 3,
    },
    {
      name: "vegetable oil",
      type: "liquid",
      weight: null,
      amount: 1,
      unit: "tablespoon",
      ingredientId: 4,
    },
  ];

  recipes = [{
    name: "Pancakes",
    categoryName: "Breakfast",
    ingredients: this.ingredients,
  },
  {
    name: "Pancakes",
    categoryName: "Breakfast",
    ingredients: this.ingredients,
  },
  {
    name: "Pancakes",
    categoryName: "Breakfast",
    ingredients: this.ingredients,
  },
  ];


  constructor() {
    this.categories.set('Breakfast', this.recipes);
    this.categories.set('Fish', this.recipes);
    this.categories.set('Meat', this.recipes);
    this.categories.set('Vegetrian', this.recipes);
    this.categories.set('Dessert', this.recipes);
  }

  ngOnInit(): void {
  }

  onCategorySelect(listOfRecipes:Recipe[]) {
    console.log(listOfRecipes);
  }



  //var steps = [
  //   {
  //    put (ingredientId:1),(ingredientId:2),(ingredientId:3),(ingredientId:4)and(ingredientId:1) into a --bowl 
  //    whisk to a smooth batter
  //    set a --medium frying pan over medium heat and carefully wipe it with some oiled kitchen paper.
  //    when hot cook the pancakes for 1 min on each side.
  //    serve
  //    
  //  }
  //giot ]

}
