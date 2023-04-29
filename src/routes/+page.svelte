<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  let searchInputTxt = "";
  let meals = [];

  const dispatch = createEventDispatcher();

  async function fetchMeals() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
    );
    const data = await response.json();
    meals = data.meals;
  }

  function handleSearch(event) {
    event.preventDefault();
    fetchMeals();
  }

  onMount(fetchMeals);
</script>

<main>
  <form on:submit={handleSearch}>
    <input
      class="bg-gray-100 text-xs rounded-sm p-3 font-extralight focus:outline-none"
      type="text"
      name="name"
      bind:value={searchInputTxt}
      placeholder="Search for an ingredient..."
    />
    <button
      type="submit"
      class="bg-gray-100 rounded-sm p-3 ml-3 text-sm duration-75 hover:bg-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
        />
      </svg>
    </button>
  </form>

  {#each meals as meal (meal.idMeal)}
    <h1>{meal.strMeal}</h1>
    <img src={meal.strMealThumb} alt="Meal" />
  {/each}
</main>
