<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="bg-green-50 h-full">
  <a href="/"> <h1 class="uppercase text-center text-[60px]">Cookspire</h1></a>

  <p class="text-center text-[17.5px] mb-16">
    Cook with whatever you got home!
  </p>
  <a href="/"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
      /></svg
    ></a
  >
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
    <div class="max-w-5xl bg-white rounded-sm shadow flex flex-col mt-5 p-7">
      <h3 class="text-4xl font-medium uppercase text-gray-900 mb-5">
        Ingredients
      </h3>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient1}</strong>
        {data.meal.strMeasure1}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950">{data.meal.strIngredient2}</strong>
        {data.meal.strMeasure2}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950">{data.meal.strIngredient3}</strong>
        {data.meal.strMeasure3}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient4}</strong>{data
          .meal.strMeasure4}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient5}</strong>{data
          .meal.strMeasure5}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient6}</strong>{data
          .meal.strMeasure6}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient7}</strong>{data
          .meal.strMeasure7}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient8}</strong>{data
          .meal.strMeasure8}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient9}</strong>{data
          .meal.strMeasure9}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient10}</strong>{data
          .meal.strMeasure10}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient11}</strong>{data
          .meal.strMeasure11}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient12}</strong>{data
          .meal.strMeasure12}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient13}</strong>{data
          .meal.strMeasure13}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient14}</strong>{data
          .meal.strMeasure14}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient15}</strong>{data
          .meal.strMeasure15}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient16}</strong>{data
          .meal.strMeasure16}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient17}</strong>{data
          .meal.strMeasure17}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient18}</strong>{data
          .meal.strMeasure18}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient19}</strong>{data
          .meal.strMeasure19}
      </p>
      <p class="text-gray-700">
        <strong class="text-gray-950"> {data.meal.strIngredient20}</strong>{data
          .meal.strMeasure20}
      </p>
    </div>
  </div>
</div>
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
