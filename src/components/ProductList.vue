<template>
    <ul>
        <li class="part" @click="showProductInfo(product)" v-for="product in productsForSelectedType" :key="product.p_id"> {{product.p_name}} </li>
    </ul>
</template>
<script>
import products from '../data/products'

export default {
    name: 'ProductList',
    props: [
        'productType'
    ],
    data() {
        return {
            products: products
        }
    },
    computed: {
        productsForSelectedType() {
            return this.products[this.productType]


        }
    },
    methods: {
        showProductInfo(product) {

          //  this.$router.push('/product');
          this.$router.push({
              name: 'ProductInfo',
              params: {
                  id: product.p_id,
                  productType: this.productType
              }
          })
        }
    },
}
</script>
<style>
.part {
    cursor: pointer;
}
</style>