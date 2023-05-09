<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div
  class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between flex-row max-w-4xl"
>
  <div class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
    <img
      class="h-64 w-full object-cover"
      src={data.meal.strMealThumb}
      alt={data.meal.strMeal}
    />

    <div class="p-2">
      <h3 class="text-xl font-medium text-gray-900 mb-3">
        {data.meal.strMeal}
      </h3>
      <div class="flex flex-row">
        <p class=" mb-2 text-white rounded bg-gray-800 p-2 mr-3">
          {data.meal.strArea}
        </p>
        <p class=" mb-2 text-white rounded bg-gray-800 p-2">
          {data.meal.strCategory}
        </p>
      </div>
    </div>
  </div>

  <div
    class="bg-white rounded-lg shadow overflow-hidden flex flex-col w-1/2 p-5"
  >
    <h3 class="text-lg font-medium text-gray-900 mb-2">Instructions</h3>
    <p class="text-gray-700">{data.meal.strInstructions}</p>
  </div>
</div>
