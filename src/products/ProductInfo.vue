<template>
    <div>
        <h1>{{ product.title }}</h1>
        <div>
            {{ product.description }}
        </div>
    </div>
</template>
<script>
import products from '../data/products'
export default {
    name: 'ProductInfo',
    computed: {
        product() {
            const { productType, id } = this.$route.params;
            return this.products[productType].find(product => product.p_id === id)
        }
    },
    data() {
        return {
            products
        };
    },
}
</script>
<style lang="scss">

</style>