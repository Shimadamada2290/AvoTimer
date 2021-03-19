class Recipe {
    name;
    categoryName;
    ingredients;
  }
  
  class Ingredient {
      name;
      type;
      weight;
      amount;
      unit;
      ingredientId;

  }
  
  var ingredients = [
      {
          name: "salt",
          type: "solid",
          weight: null,
          ammount: 1,
          unit: "pinch",
          ingredientId:0,
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
          ingredientId:2,
      },
      {
          name:"milk",
          type: "liquid",
          weight: 300,
          amount: null,
          unit: "milliliters",
          ingredientid: 3,
      }, 
      {
          name:"vegetable oil",
          type: "liquid",
          weight: null,
          amount: 1,
          unit: "tablespoon",
          ingredientId: 4,
    },
  ];
  
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

  var recipe = {
      name: "Pancakes",
      categoryName: "Breakfast",
      ingredients: ingredients,
      steps: steps,
  };
  
  console.log(recipe);
  