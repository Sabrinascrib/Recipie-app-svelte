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

<main class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <form on:submit={handleSearch} class="mb-8 sm:mb-12">
    <div class="flex">
      <input
        class="flex-1 appearance-none rounded shadow p-4 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        bind:value={searchInputTxt}
        placeholder="Search for an ingredient..."
      />
      <button
        type="submit"
        class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-full transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="h-6 w-6"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18.707,17.293l-3.853-3.854c1.163-1.707,1.261-3.998,0.305-5.876 C15.034,5.854,12.274,4.5,9.5,4.5C4.813,4.5,1.5,7.813,1.5,12.5S4.813,20.5,9.5,20.5s7-3.313,7-7.999c0-1.306-0.346-2.527-0.945-3.595l3.838-3.838l1.414,1.414L18.707,17.293z M9.5,18.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S13.084,18.5,9.5,18.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </form>

  {#if meals && meals.length > 0}
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each meals as meal (meal.idMeal)}
        <div
          class="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-150 ease-in-out transform hover:-translate-y-2"
        >
          <img
            class="h-64 w-full object-cover"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <div class="p-8">
            <h3 class="text-lg font-medium text-gray-900 truncate">
              {meal.strMeal}
            </h3>
            <p class="mt-1 text-sm text-gray-600">{meal.strCategory}</p>
            <button
              type="button"
              class="mt-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
              on:click={() => dispatch("selectMeal", meal.idMeal)}
            >
              View Recipe
            </button>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-lg text-gray-700">
      No meals found. Please try another search.
    </p>
  {/if}
</main>
