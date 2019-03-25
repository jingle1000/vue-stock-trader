<template>
    <div>
        <div class="account-funds p-4 shadow mx-auto"> 
            <div class="row pl-4">
                <div class="col-3">
                    <h3>{{ title }}</h3>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-dark btn-block">Current Funds: {{ userFunds | currency }}</button>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-dark btn-block">Net Worth: {{ netWorth | currency }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title"],
    data() {
        return {
            funds: 0.00,
        }
    },
    computed: {
        userFunds() {
            return parseFloat(Math.round((this.$store.state.userFunds) * 100) / 100).toFixed(2);;
        },
        netWorth() {
            let total = 0;
            this.$store.state.userPurchases.forEach(stockObj => {
                total += parseFloat(stockObj.stock.price * stockObj.quantity);
            });

            return total + parseFloat(this.userFunds);
        }
    },
    methods: {
        addFunds() {
            this.$store.commit('addUserFunds', this.funds);
        }
    }
}
</script>

<style scoped>
p {
    padding: 0;
    margin: 0;
}
.account-funds {
    background: white;
    border-radius: 10px;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
.col-3 {
    display: flex;
    justify-content: baseline;
    align-content: center;
}
</style>
