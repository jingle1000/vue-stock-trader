<template>
    <div>
        <div class="account-funds p-4 shadow mx-auto"> 
            <div class="row pl-4">
                <div class="col-3">
                    <h3>{{ title }}</h3>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-dark btn-block">Current Funds: ${{ userFunds }}</button>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-dark btn-block">Net Worth: {{}}</button>
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
}
.col-3 {
    display: flex;
    justify-content: baseline;
    align-content: center;
}
</style>
