<script>
  // import ramen from '/assets/ramen.png';

  import { onMount } from "svelte";
  let searchInputTxt = "";
  export let animes = [];
  onMount(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
    )
      .then((response) => response.json())
      .then((result) => (animes = result.data));
    // .then(result => console.log(result.data))
  });
</script>
