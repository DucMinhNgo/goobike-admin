<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, incidunt
      laboriosam? Placeat cupiditate architecto iusto laborum maiores ipsam
      laudantium? Pariatur?
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=mario", {
  method: "post",
  body: { age: 25 },
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>