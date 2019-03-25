<template>
    <div class="container p-4">
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
    border: none;
}
</style>
