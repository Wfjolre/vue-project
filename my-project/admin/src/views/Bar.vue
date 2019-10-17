<template>
    <div id="app">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ProductList></ProductList>
        <hr>
        <ShoppingCart></ShoppingCart>
    </div>
</template>

<script>
import ProductList from "./shopping-cart/ProductList";
import ShoppingCart from "./shopping-cart/ShoppingCart";

export default {
    name:'Bar',
    components:{ProductList,ShoppingCart}
}
</script>

<style lang="scss">
.foo{
    color: chartreuse;
}
</style>