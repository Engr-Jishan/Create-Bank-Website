document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposti total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const perviousDepositAmout = parseFloat(previousDepositText);
    const newDepositTotal = perviousDepositAmout + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balacne
    const balacneTotal = document.getElementById('balance-total');
    const balacneTotalText = balacneTotal.innerText;
    const perviousBalanceTotal = parseFloat(balacneTotalText);
    const newBalanceTotal = perviousBalanceTotal + newDepositAmount;
    balacneTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = perviousBalanceTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balacneTotal = document.getElementById('balance-total');
    const perviousBalanceText = balacneTotal.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceText);
    const newBalanceTotal = perviousBalanceTotal - newWithdrawAmount;
    balacneTotal.innerText = newBalanceTotal;

    // Clear withdraw input
    withdrawInput.value = '';
})