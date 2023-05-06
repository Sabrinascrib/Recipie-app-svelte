/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.slug}`
  );

  const data = await response.json();
  const meals = data.meals;

  const meal = meals[0];

  console.log({ meal });

  return {
    meal,
  };
}
