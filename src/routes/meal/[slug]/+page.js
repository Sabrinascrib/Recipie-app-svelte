/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.slug}`
  );
  const meal = await res.json();

  console.log(meal);

  return {
    meal,
  };
}
