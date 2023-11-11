const getImageNutritionByName = async (e) => {
  const apiKey = "tVyXffz/CQLymGgX8GzfNg==18HOn1i9OuAOgIli";
  const formData = new FormData();
    formData.append('file', e);
    return fetch(`https://api.calorieninjas.com/v1/imagetextnutrition`, {
    method:"POST", 
    body: formData, 
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  };
  
  export default getImageNutritionByName;