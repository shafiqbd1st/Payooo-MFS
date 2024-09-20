document.getElementById('add-money').addEventListener('click', function(event){

    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin-number').value;
    
    const totalAmount = document.getElementById('total-amount').innerText;
   
    
    if(pin == '1234'){
        const sum = parseFloat(totalAmount) + parseFloat(amount);
        document.getElementById('total-amount').innerText = sum;
    }
    else{
        alert('wrond password');
    }

    document.getElementById('amount').value = '';
    document.getElementById('pin-number').value = '';
});


document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const amount = document.getElementById('account-balance').value;
    const pin = document.getElementById('cash-out-pin').value;
    
    const totalAmount = document.getElementById('total-amount').innerText;

    if(pin === '1234'){
        const sum = parseFloat(totalAmount) - parseFloat(amount);
        document.getElementById('total-amount').innerText = sum;
    }
    else{
        alert('wrond password');
    }

   document.getElementById('account-balance').value = '';
   document.getElementById('cash-out-pin').value = '';
})