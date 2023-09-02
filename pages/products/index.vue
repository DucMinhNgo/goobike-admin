<template>
    <div>
        <h2>Product</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <NuxtLink :key="`${p.id}`" :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px
    }
    p {
        margin: 20px 0;
    }
</style>