let withValue = document.getElementById('withValue').value;
let depBtn = document.getElementById('depBtn');
let withBtn = document.getElementById('withBtn');

// Deposit Section

depBtn.addEventListener('click', deposit = ()=>{
    let depValue = document.getElementById('depValue').value;
    let depNumValue = parseInt(depValue);
    let deposit = document.getElementById('deposit').innerHTML;
    let depositNum = parseInt(deposit);
    let totalDeposit = depNumValue + depositNum;
    if(depValue <= 0){
        alert('Please Enter a Positive Amount');
    } else{
        document.getElementById('deposit').innerText = totalDeposit;

        // Balance
        let balance = document.getElementById('balance').innerHTML;
        let balanceNum = parseInt(balance);
        let newTotalBalance = depNumValue + balanceNum;
        document.getElementById('balance').innerText = newTotalBalance;
    }
    document.getElementById('depValue').value = "";
});

// Withdraw Section

withBtn.addEventListener('click', ()=>{
    let withValue = document.getElementById('withValue').value;
    let withNumValue = parseInt(withValue);
    let withdraw = document.getElementById('withdraw').innerHTML;
    let withdrawNum = parseInt(withdraw);
    let totalWithdraw = withNumValue + withdrawNum;

    if(withValue <= 0){
        alert('Please Enter a Positive Amount')
    } else{
        document.getElementById('withdraw').innerText = totalWithdraw;

    // Balance
    let balance = document.getElementById('balance').innerHTML;
    let balanceNum = parseInt(balance);
    let newTotalBalance = balanceNum - withNumValue;
    if (newTotalBalance < 1000){
        alert("SORRY! You must have 1000Taka in your bank balance. In that case you can't withdraw!");
    }else{
    document.getElementById('balance').innerText = newTotalBalance;
    }
    }
    document.getElementById('withValue').value = "";
});
