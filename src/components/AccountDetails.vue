<template>
    <div>
        <div class="card p-4 shadow mx-auto"> 
            <h3 class="text-center">Account Details</h3>
            <hr>
            <p>Current funds: ${{ userFunds }}</p>
            <hr>
            <label for="funds">Add Funds</label>
            <input type="number" value="0" v-model="funds" class="form-control">
            <button class="btn btn-primary btn-block mt-4" @click="addFunds">Add Funds</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            funds: 0.00,
        }
    },
    computed: {
        userFunds() {
            return parseFloat(Math.round(this.$store.state.userFunds * 100) / 100).toFixed(2);
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
.card {
    max-width: auto !important;
    width: auto !important;
    border: none;
    border-radius: 10px;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
</style>
