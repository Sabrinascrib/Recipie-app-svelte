<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  let searchInputTxt = "";
  let meals = [];

  async function fetchMeals() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
    );
    const data = await response.json();
    meals = data.meals;
  }

  async function handleSearch(event) {
    event.preventDefault();
    await fetchMeals();
  }

  onMount(async () => {
    await fetchMeals();
  });
</script>

<main class="bg-green-50">
  <div class=" max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <a href="/">
      <h1 class="uppercase text-center text-[60px]">Cookspire</h1></a
    >

    <p class="text-center text-[17.5px] mb-16">
      Cook with whatever you got home!
    </p>
    <form on:submit={handleSearch} class="mb-8 sm:mb-12">
      <div class="flex max-w-5xl mx-auto">
        <input
          class="flex-1 appearance-none rounded-sm shadow p-4 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          bind:value={searchInputTxt}
          placeholder="Search for an ingredient..."
        />
        <button
          type="submit"
          class="bg-green-400 hover:bg-green-500 text-green-950 font-bold py-4 px-6 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
            /></svg
          >
        </button>
        <a
          href="/"
          class="ml-1 bg-green-400 hover:bg-green-500 text-green-950 font-bold py-4 px-6 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"
            /></svg
          ></a
        >
      </div>
    </form>

    {#if meals && meals.length > 0}
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each meals as meal (meal.idMeal)}
          <div
            class="bg-white m-5 rounded-sm-lg shadow-sm overflow-hidden transition duration-150 ease-in-out transform hover:-translate-y-1 flex flex-col gap-2"
          >
            <img
              class="h-64 w-full object-cover rounded-sm-lg"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div class="p-2">
              <h3 class="text-xl font-medium uppercase text-gray-950 truncate">
                {meal.strMeal}
              </h3>

              <a
                href={`/meal/${meal.idMeal}`}
                class="mt-2 bg-green-400 hover:bg-green-500 text-green-950 text-center font-bold py-2 px-4 w-32 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline text-sm flex flex-col gap-3"
              >
                View Recipe
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-lg text-gray-700">
        No meals found. Please try another search.
      </p>
    {/if}
  </div>
</main>

<footer class="bg-green-50">
  <p class="text-center text-green-800 py-20">
    Build by <a href="https://github.com/Sabrinascrib" class=""
      >Sabrina Abrodi</a
    >
  </p>
</footer>

<style>
  a,
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  h1,
  h3 {
    font-family: "Darumadrop One", cursive;
  }
</style>
