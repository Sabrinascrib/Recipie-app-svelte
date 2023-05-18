import { writable } from "svelte/store";

// Create a writable store for favorite meals
export const favoriteMeals = writable([]);

// Check if local storage is available
const isLocalStorageAvailable = typeof localStorage !== "undefined";

// Initialize the favorite meals from local storage
if (isLocalStorageAvailable) {
  const storedFavoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals"));
  if (storedFavoriteMeals) {
    favoriteMeals.set(storedFavoriteMeals);
  }
}

// Subscribe to changes in the favorite meals and update local storage
favoriteMeals.subscribe((value) => {
  if (isLocalStorageAvailable) {
    localStorage.setItem("favoriteMeals", JSON.stringify(value));
  }
});

// Add a meal to the favorite meals
export function addToFavorites(meal) {
  favoriteMeals.update((meals) => {
    // Checking if the meal already exists in the array
    const existingMeal = meals.find((m) => m.idMeal === meal.idMeal);
    if (existingMeal) {
      return meals;
    } else {
      return [...meals, meal];
    }
  });
}
export function removeFromFavorites(index) {
  favoriteMeals.update((meals) => {
    meals.splice(index, 1);
    return meals;
  });
}
