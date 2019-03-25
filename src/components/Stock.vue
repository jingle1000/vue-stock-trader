<template>
    <div class="stock card shadow mt-4 mr-4 p-4">
       <h4 class="m-0 p-0 text-center">{{ symbol }}</h4>
       <hr>
       <p>{{ name }}</p>
       <p>Price: ${{ price }}</p> 
       <hr>
       <p>Quantity</p>
       <input type="number" class="form-control" value="0" v-model="quantity">
       <button class="btn btn-primary btn-block mt-4" @click="buyStock">Buy Stock</button>
    </div>
</template>

<script>
export default {
    props: ["stockArray"],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        symbol() {
            return this.stockArray.symbol;
        },
        name() {
            return this.stockArray.name;
        },
        price() {
            return parseFloat(Math.round(this.stockArray.price * 100) / 100).toFixed(2);
        }
    },
    methods: {
        buyStock() {
            var data = {stock: this.stockArray, quantity: this.quantity};
            this.$store.dispatch('addStock', data);
        }
    }
}
</script>

<style>

</style>
