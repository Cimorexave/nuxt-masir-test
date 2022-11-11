<template>
  <div class="actions w-full flex flex-col items-center gap-5">
    <input
      type="text"
      placeholder="Search for a country..."
      class="rounded-md shadow-md bg-white w-[90%] p-5 text-gray-100"
    />
    <div
      style="display: flex"
      class="flex-row w-[90%] justify-between items-center"
    >
      <div
        class="input-select text-center bg-white rounded-md shadow-md p-5 rounded-md shadow-md"
      >
        <label for="region">Filter By Region: </label>
        <select name="region" id="region">
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceaniea">Oceaniea</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
      <div class="tag">tag</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Actions",
};
</script>
