<template>
    <div class="container pt-4">
        <account-funds :title="title"></account-funds>

        <stock-container></stock-container>
    </div>
</template>

<script>
import Stocks from '../components/Stocks.vue'
import AccountFunds from '../components/AccountFunds.vue'
export default {
    data() {
        return {
            title: "Buy"
        }
    },
    components: {
        StockContainer: Stocks,
        AccountFunds,
    }
}
</script>

<style>
.card {
    max-width: 400px;
    border: none;
}
</style>
