<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="#">Stock Trader</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/buy">Buy</router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to='/complaint'>File Complaint</router-link>
                    </li>
                </ul>
            </div>
            <button class="btn btn-outline-dark mr-4" @click="updatePrices">End Day</button>
            <div class="dropdown pr-4">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Import & Export
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        stockPrices() {
            return this.$store.state.stocks;
        }
    },
    methods: {
        updatePrices() {
            let newStocks = [];
            this.stockPrices.forEach(element => {
                let currentPrice = element.price;
                let percentChange = (Math.random() * (1.2 - 0.8) + 0.8).toFixed(4);
                element.price = currentPrice * percentChange;
                newStocks.push(element);
            });
            this.$store.state.stocks = newStocks;
        }
    }
}
</script>


<style lang="css">
    li a {
        color: #333;
        padding-left: 20px;
    }
</style>