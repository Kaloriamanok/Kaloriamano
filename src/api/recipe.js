const getRecipeByName = async (query) => {
    const apiKey = "tVyXffz/CQLymGgX8GzfNg==18HOn1i9OuAOgIli";
  
    return fetch(`https://api.calorieninjas.com/v1/recipe?query=${query}`, {    
        method: 'GET',
        mode:"no-cors",
        headers: {
        "X-Api-Key": apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => console.log(response.json()))
      .then(data => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  
  export default getRecipeByName;