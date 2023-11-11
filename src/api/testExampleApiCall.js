import exampleApiCall from "../api/example.js";
import getImageNutritionByName from "./imagenutrition.js";
import getRecipeByName from "./recipe.js";

const testQuery = "pizza";

exampleApiCall(testQuery)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

getRecipeByName(testQuery)
.then((data) => console.log(data))
.catch((error) => console.error("Error:", error));

/*
    ezzel tesztelheted hogy az api hívás működik-e
    NEM UNIT TESZTNEK SZÁMÍT, csak egy segítség

    a terminálban navigálj el az api mappába, és futtasd a következő parancsot:
    node testExampleApiCall.js

    a következőt kell látnod a terminálban:
    {
  items: [
    {
      name: 'apple',
      calories: 53,
      serving_size_g: 100,
      fat_total_g: 0.2,
      fat_saturated_g: 0,
      protein_g: 0.3,
      sodium_mg: 1,
      potassium_mg: 11,
      cholesterol_mg: 0,
      carbohydrates_total_g: 14.1,
      fiber_g: 2.4,
      sugar_g: 10.3
    }
  ]
}
  */
