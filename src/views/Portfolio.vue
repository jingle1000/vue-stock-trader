<template>
    <div class="container mt-4">
       <account-funds :title="title"></account-funds>
       <div v-for="(key, index) in purchases" :key="index">
           <portfolio-stock :stockArray="key"></portfolio-stock>
       </div>
    </div>
</template>

<script>
import PortfolioStock from '../components/PortfolioStock.vue';
import AccountFunds from '../components/AccountFunds.vue'
export default {
    data() {
        return {
            title: "Portfolio"
        }
    },
    components: {
        PortfolioStock, 
        AccountFunds
    },
    computed: {
        purchases() {
            return this.$store.state.userPurchases;
        }
    },
}
</script>

<style>
</style>
