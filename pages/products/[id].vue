<template>
    <div>
        <p>Product detail for {{ id }}</p>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
    definePageMeta({
        layout: 'products'
    })
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product } = await useFetch(uri, { key: id})
</script>

<style lang="scss" scoped>

</style>