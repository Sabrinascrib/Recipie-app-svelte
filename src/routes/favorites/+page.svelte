<script>
  import { favoriteMeals, removeFromFavorites } from "../favoritesStore.js";
</script>

<a href="/">
  <h1 class="uppercase text-center text-[60px]">Cookspire</h1>
</a>

<p class="text-center text-[17.5px] mb-16">Cook with whatever you got home!</p>

<h2>Favorite Meals</h2>

{#if $favoriteMeals.length > 0}
  {#each $favoriteMeals as meal, index (meal.idMeal)}
    <div key={meal.idMeal}>
      <img
        class="h-64 w-full object-cover rounded-sm-lg"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <h3>{meal.strMeal}</h3>
      <button on:click={() => removeFromFavorites(index)}>
        Remove from Favorites
      </button>
    </div>
  {/each}
{:else}
  <p>No favorite meals yet.</p>
{/if}

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
  h3 {
    font-family: "Darumadrop One", cursive;
  }
</style>
