<template>
    <div class="stock card shadow m-4 p-4">
       <h4 class="m-0 p-0 text-center">{{ symbol }}</h4>
       <hr>
       <p>{{ name }}</p>
       <p>Price: {{ price | currency }}</p> 
       <hr>
       <p>Quantity: {{ quantity }}</p>
       <p>Total: {{ total | currency }}</p>
       <button class="btn btn-primary btn-block mt-4" @click="sellStock">Sell Stock</button>
    </div>
</template>

<script>
export default {
    props: ["stockArray"],
    computed: {
        symbol() {
            return this.stockArray.stock.symbol;
        },
        name() {
            return this.stockArray.stock.name;
        },
        price() {
            return this.stockArray.stock.price;
        },
        quantity() {
            return this.stockArray.quantity;
        },
        total() {
           
            return parseFloat(Math.round((this.quantity * this.price) * 100) / 100).toFixed(2);
        }
    },
    methods: {
        sellStock() {
            var data = {stock: this.stockArray, quantity: this.quantity};
            this.$store.dispatch('addStock', data);
        }
    }
}
</script>

<style>
</style>
