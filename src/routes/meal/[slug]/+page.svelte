<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="bg-green-50 h-full">
  <a href="/"> <h1 class="uppercase text-center text-[60px]">Cookspire</h1></a>

  <p class="text-center text-[17.5px]">Cook with whatever you got home!</p>

  <div
    class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between flex-col"
  >
    <div class="flex flex-row justify-between">
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
      <a
        href="/favorites"
        class="ml-1 h-14 bg-green-400 hover:bg-green-500 text-green-950 font-bold py-4 px-6 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
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

    <div class="bg-white rounded-sm shadow overflow-hidden flex flex-col">
      <img
        class="h-64 w-full object-cover"
        src={data.meal.strMealThumb}
        alt={data.meal.strMeal}
      />
      <div class="flex flex-row justify-between">
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
        <button class="pr-5" on:click={() => addToFavorites(meal)}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="hover:text-green-400 duration-100"
            ><path
              fill="currentColor"
              d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"
            /></svg
          ></button
        >
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
