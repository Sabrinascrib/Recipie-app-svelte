<script>
  import { favoriteMeals, removeFromFavorites } from "../favoritesStore.js";
</script>

<main class="bg-green-50">
  <div class=" max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <a href="/">
      <h1 class="uppercase text-center text-[60px]">Cookspire</h1>
    </a>

    <p class="text-center text-[17.5px] mb-16">
      Cook with whatever you got home!
    </p>
    <button class="mb-20" onclick="history.back()"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
        /></svg
      ></button
    >
    <h2 class="uppercase text-4xl text-center mb-20">Favorite Meals</h2>

    {#if $favoriteMeals.length > 0}
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each $favoriteMeals as meal, index (meal.idMeal)}
          <div
            class="bg-white m-5 rounded-sm shadow-sm overflow-hidden transition duration-150 ease-in-out transform hover:-translate-y-1 flex flex-col gap-2"
            key={meal.idMeal}
          >
            <img
              class="h-64 w-full object-cover rounded-sm"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div class="flex p-2 flex-row justify-between">
              <div class=" flex flex-col">
                <h3
                  class="text-xl font-medium uppercase text-gray-950 truncate mb-2"
                >
                  {meal.strMeal}
                </h3>
                <a
                  href={`/meal/${meal.idMeal}`}
                  class="mt-2 bg-green-400 hover:bg-green-500 text-green-950 text-center font-bold py-2 px-4 w-32 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline text-sm flex flex-col gap-3"
                >
                  View Recipe
                </a>
              </div>
              <button class="pr-5" on:click={() => removeFromFavorites(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="hover:text-red-600 duration-100"
                  ><path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm0 0v13V6Zm5 7.9l1.9 1.9q.3.275.713.275t.687-.275q.3-.3.3-.713t-.3-.687l-1.9-1.9l1.9-1.9q.3-.3.3-.713t-.3-.687q-.275-.3-.688-.3t-.712.3L12 11.1l-1.9-1.9q-.275-.3-.688-.3t-.712.3q-.275.275-.275.688t.275.712l1.9 1.9l-1.9 1.9q-.275.275-.275.688t.275.712q.3.275.713.275t.687-.275l1.9-1.9Z"
                  /></svg
                >
              </button>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p>No favorite meals yet.</p>
    {/if}
  </div>
</main>
<footer class="bg-green-50">
  <p class="text-center text-green-800 py-20">
    Build by <a href="https://github.com/Sabrinascrib">Sabrina Abrodi</a>
  </p>
</footer>

<style>
  a,
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  h1,
  h2,
  h3 {
    font-family: "Darumadrop One", cursive;
  }
</style>
