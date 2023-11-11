const getNutritionByName = async (query) => {
    const apiKey = "qBM788BqByOeR1WtBeX35g==jUYC642X1GCttFof";
  
    return fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  };
  
  export default getNutritionByName;