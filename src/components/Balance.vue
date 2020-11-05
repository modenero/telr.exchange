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
                    <div role="tabpanel" class="tab-pane fade show active" id="deposit">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th style="width:50%">Token Name</th>
                                    <th style="width:25%">OUT</th>
                                    <th style="width:25%">IN</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">BAI<span class="d-md-none"> (BAI)</span></a>
                                    </td>
                                    <td>
                                        <span>0.013</span>
                                    </td>
                                    <td>
                                        <span>0.000</span>
                                    </td>
                                </tr>

                                <tr class="balance-form">
                                    <td>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-sm" id="cacheInBaseToken" placeholder="Amount">
                                        </div>
                                    </td>
                                    <td colspan="2">
                                        <button type="button" class="btn btn-info btn-sm btn-block">
                                            Deposit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="withdraw">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th>Token</th>
                                    <th data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance in your personal Ethereum wallet, which you have connected to Telr Exchange in the account dropdown (upper right).">Cached OUT</th>
                                    <th data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance you have deposited from your personal Ethereum wallet to the Telr Exchange smart contract.">Deposit</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">BAI</a>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                </tr>

                                <tr class="balance-form">
                                    <td colspan="2">
                                        <div class="form-group">
                                            <label for="BAIwithdrawl">Withdraw BAI</label>
                                            <input type="text" class="form-control form-control-sm" id="BAIwithdrawl" placeholder="Amount">
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-info btn-sm balance-inline" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Use this to withdraw from the Telr Exchange smart contract (&quot;Telr Exchange&quot; column) to your personal Ethereum wallet (&quot;Wallet&quot; column).">Withdraw</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">Bai Stablecoin</a>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.013068495718">0.013</span>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                </tr>

                                <tr class="balance-form">
                                    <td colspan="2">
                                        <div class="form-group">
                                            <label for="ETHwithdrawl">Withdraw BCH</label>
                                            <input type="text" class="form-control form-control-sm" id="ETHwithdrawl" placeholder="Amount">
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-info btn-sm balance-inline" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Use this to withdraw from the Telr Exchange smart contract (&quot;Telr Exchange&quot; column) to your personal Ethereum wallet (&quot;Wallet&quot; column).">
                                            Withdraw
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="transfer">
                        <table class="table table-borderless table-balances">
                            <thead>
                                <tr>
                                    <th>Token</th>
                                    <th data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance in your personal Ethereum wallet, which you have connected to Telr Exchange in the account dropdown (upper right).">
                                        Wallet
                                    </th>
                                    <th data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance you have deposited from your personal Ethereum wallet to the Telr Exchange smart contract.">Telr Exchange</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">BAI</a>
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
                                        <div class="balance-inline-form">
                                            <div class="form-group">
                                                <label for="BAItransfer1">Amount</label>
                                                <input type="text" class="form-control form-control-sm" id="BAItransfer1">
                                            </div>
                                            <span>to</span>
                                            <div class="form-group">
                                                <label for="BAItransfer2">Address</label>
                                                <input type="text" class="form-control form-control-sm" id="BAItransfer2" value="">
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="balance-form">
                                    <td colspan="3">
                                        <button type="button" class="btn btn-info btn-sm balance-below" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Use this to transfer from your personal Ethereum wallet (&quot;Wallet&quot; column) to any other wallet.">
                                            Transfer
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="javascript://" class="nowrap">BAI Stablecoin</a>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.013068495718">0.013</span>
                                    </td>
                                    <td>
                                        <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.000</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="3">
                                        <div class="balance-inline-form">
                                            <div class="form-group">
                                                <label for="ETHtransfer1">Amount</label>
                                                <input type="text" class="form-control form-control-sm" id="ETHtransfer1">
                                            </div>
                                            <span>to</span>
                                            <div class="form-group">
                                                <label for="ETHtransfer2">Address</label>
                                                <input type="text" class="form-control form-control-sm" id="ETHtransfer2" value="">
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="balance-form">
                                    <td colspan="3">
                                        <button type="button" class="btn btn-info btn-sm balance-below" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Use this to transfer from your personal Ethereum wallet (&quot;Wallet&quot; column) to any other wallet.">
                                            Transfer
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- <div class="balance-warning">
                    <p class="text-danger text-center"><small>
                        Make sure <a href="javascript://">BAI</a> is the token you actually want to trade.
                        Multiple tokens can share the same name.
                    </small></p>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // msg: String
    }
}
</script>

<style scoped>
/*  */
</style>
