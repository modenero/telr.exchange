<template>
    <div class="component">
        <div class="component-header">
            <span class="text-primary">Telr</span> <span class="text-warning">Exchange</span> Balance
        </div>

        <div id="balance">
            <div class="component-tabs nav-header">
                <ul class="nav" role="tablist">
                    <li class="nav-item">
                        <a role="tab" data-toggle="tab" href="#deposit" class="active nav-link" aria-controls="deposit" aria-selected="true">
                            Deposit
                        </a>
                    </li>

                    <li class="nav-item">
                        <a role="tab" data-toggle="tab" href="#withdraw" class="nav-link" aria-controls="withdraw" aria-selected="false">
                            Withdraw
                        </a>
                    </li>

                    <li class="nav-item">
                        <a role="tab" data-toggle="tab" href="#transfer" class="nav-link" aria-controls="transfer" aria-selected="false">
                            Transfer
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <div class="tab-content">

                    <!-- DEPOSIT -->
                    <div role="tabpanel" class="tab-pane fade show active" id="deposit">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th style="width:50%">Token name</th>
                                    <th style="width:25%">Wallet</th>
                                    <th style="width:25%">Exchange</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">{{tokenName}}<span class="d-md-none"> ({{tokenSymbol}})</span></a>
                                    </td>
                                    <td>
                                        <span>0.013</span>
                                    </td>
                                    <td>
                                        <span>0.000</span>
                                    </td>
                                </tr>

                                <!-- <tr class="balance-form"> -->
                                <tr class="">
                                    <td>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-sm" id="cacheInBaseToken" placeholder="Amount">
                                        </div>
                                    </td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-info btn-sm btn-block" @click="deposit">
                                            Deposit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- WITHDRAW -->
                    <div role="tabpanel" class="tab-pane fade" id="withdraw">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th style="width:50%">Token name</th>
                                    <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance in your personal Ethereum wallet, which you have connected to Telr Exchange in the account dropdown (upper right).">Wallet</th>
                                    <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance you have deposited from your personal Ethereum wallet to the Telr Exchange smart contract.">Exchange</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">{{tokenName}}<span class="d-md-none"> ({{tokenSymbol}})</span></a>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                </tr>

                                <!-- <tr class="balance-form"> -->
                                <tr class="">
                                    <td>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-sm" id="cacheInBaseToken" placeholder="Amount">
                                        </div>
                                    </td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-info btn-sm btn-block" @click="withdraw">
                                            Withdraw
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- TRANSFER -->
                    <div role="tabpanel" class="tab-pane fade" id="transfer">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th style="width:50%">Token name</th>
                                    <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance in your personal Ethereum wallet, which you have connected to Telr Exchange in the account dropdown (upper right).">Wallet</th>
                                    <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance you have deposited from your personal Ethereum wallet to the Telr Exchange smart contract.">Exchange</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">{{tokenName}}<span class="d-md-none"> ({{tokenSymbol}})</span></a>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="3">
                                        <div class="form-row balance-inline-form">
                                            <div class="col-sm-4 form-group">
                                                <input type="text" class="form-control form-control-sm" id="validationDefault01" value="" placeholder="Amount">
                                            </div>

                                            <div class="col-sm-5 form-group">
                                                <input type="text" class="form-control form-control-sm" id="validationDefault02" value="" placeholder="Recipient address">
                                            </div>

                                            <div class="col-sm-3">
                                                <button class="btn btn-info btn-sm btn-block">Transfer</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    props: {
        // msg: String
    },
    data: () => {
        return {
            token: null,
        }
    },
    computed: {
        ...mapGetters([
            //
        ]),

        ...mapGetters('tokens', [
            'getToken'
        ]),

        tokenName() {
            if (!this.token) {
                return null
            }

            return this.token.title
        },

        tokenSymbol() {
            if (!this.token) {
                return null
            }

            return this.token.symbol
        },

    },
    methods: {
        ...mapActions([
            'createEthOrder'
        ]),

        deposit() {
            console.log('Ready to deposit')

            this.createEthOrder()
        },

        withdraw() {
            console.log('Ready to withdraw')

        },

    },
    created: async function () {
        /* Retrieve current token. */
        this.token = await this.getToken('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582')
        console.log('CURRENT TOKEN', this.token)
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
