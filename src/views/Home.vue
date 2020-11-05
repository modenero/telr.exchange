<template>
    <main>
        <Navbar />

        <div class="trading-cont">
            <div class="vertical-split">
                <Balance />
                <Trade />
            </div>

            <OrderBook />

            <div class="vertical-split">
                <PriceChart />
                <Transactions />
            </div>

            <div class="vertical-split">
                <TradesVolume />
                <Notices />
            </div>
        </div>

        <!-- <div id="buyTrade"><div></div></div> -->
        <!-- <div id="sellTrade"><div></div></div> -->
        <!-- <div id="importAccount"></div> -->
        <!-- <div id="otherToken"></div> -->
        <!-- <div id="gasPrice"></div> -->
        <!-- <div id="tokenGuide"></div> -->
        <!-- <div id="screencast"></div> -->
        <!-- <div id="ledger"></div> -->
    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters, mapState } from 'vuex'

/* Import components. */
import Balance from '@/components/Balance.vue'
import Navbar from '@/components/Navbar.vue'
import Notices from '@/components/Notices.vue'
import OrderBook from '@/components/OrderBook.vue'
import PriceChart from '@/components/PriceChart.vue'
import Trade from '@/components/Trade.vue'
import TradesVolume from '@/components/TradesVolume.vue'
import Transactions from '@/components/Transactions.vue'

export default {
    components: {
        Balance,
        Navbar,
        Notices,
        OrderBook,
        PriceChart,
        Trade,
        TradesVolume,
        Transactions,
    },
    data: () => {
        return {
            /* App Summary */
            appTitle: 'Telr Exchange',
            appDesc: 'The Official Bitcoin (DEX) Decentralized Exchange',

            /* Blockchain Summary */
            // anameTelr: '0x0',
            // anameTelr: '0x0',

            /* Exchange summary. */
            orders: 'There are no orders here.'

        }
    },
    computed: {
        ...mapState({
            // val: state => state.val,
        }),

        ...mapGetters({
            //
        }),
    },
    methods: {
        ...mapActions({
            //
        }),

        init () {
            console.info('App has loaded successfully!') // eslint-disable-line no-console

            /* Initialize Ethereum provider. */
            // initEthereum()

            /* Initialize order book. */
            // initOrderBook()

            /* Initialie Telr contract. */
            // initTelr()

            /* Initialie Telr contract. */
            // initTelr()
        },
    },
    mounted: function () {
        /* Initialize application. */
        // this.init()
    },
}
</script>
