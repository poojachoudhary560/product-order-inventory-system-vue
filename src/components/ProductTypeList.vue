<template>
    <ul>
        <li v-for="productType in productTypes" :key="productType.id">
            {{ productType.name }}
            <product-list :productType="productType.name"></product-list>
        </li>
    </ul>
</template>
<script>
import productTypes from '../data/productTypes'
import ProductList from '../components/ProductList'
export default {
    name: 'ProductTypeList',
    components: {
        ProductList
    },
    data() {
        return {
            productTypes: productTypes
        }
    }
}
</script>
<style lang="scss">

</style>