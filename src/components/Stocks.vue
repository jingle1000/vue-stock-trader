<template>
    <div>
        <div class="row">
            <div v-for="(item, index) in stocks" :key="index">
            <stock :stockArray=item></stock>
        </div>
        </div>
    </div>

</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            Stock: Stock
        },
        computed: {
            stocks() {
                return this.$store.state.stocks;
            }
        }
    }
</script>

<style>
</style>