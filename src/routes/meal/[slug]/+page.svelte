<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<a href="/"> <h1 class="uppercase text-center text-[60px]">Cookspire</h1></a>

<p class="text-center text-[17.5px] mb-16">Cook with whatever you got home!</p>

<div
  class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between flex-col"
>
  <div class="bg-white rounded-sm shadow overflow-hidden flex flex-col">
    <img
      class="h-64 w-full object-cover"
      src={data.meal.strMealThumb}
      alt={data.meal.strMeal}
    />

    <div class="px-7 pb-7 pt-5">
      <h3 class="text-4xl font-medium text-gray-900 uppercase mb-3">
        {data.meal.strMeal}
      </h3>
      <div class="flex flex-row">
        <p
          class="bg-green-400 text-green-950 text-center place-items-center flex font-bold px-2 h-7 rounded-sm mr-3"
        >
          {data.meal.strArea}
        </p>
        <p
          class="bg-green-400 text-green-950 text-center place-items-center flex font-bold px-2 h-7 rounded-sm"
        >
          {data.meal.strCategory}
        </p>
      </div>
    </div>
  </div>

  <div class="max-w-5xl bg-white rounded-sm shadow flex flex-col mt-5 p-7">
    <h3 class="text-4xl font-medium uppercase text-gray-900 mb-5">
      Instructions
    </h3>
    <p class="text-gray-700">{data.meal.strInstructions}</p>
  </div>
</div>

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
