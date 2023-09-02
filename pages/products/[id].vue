<template>
    <div>
        <p>Product detail for {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>