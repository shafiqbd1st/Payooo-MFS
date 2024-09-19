document.getElementById('add-money').addEventListener('click', function(event){

    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin-number').value;
    
    const totalAmount = document.getElementById('total-amount').innerText;
    console.log(totalAmount);
    
    if(pin == '1234'){
        const sum = parseInt(totalAmount) + parseInt(amount);
        document.getElementById('total-amount').innerText = sum;
        console.log(sum);
        
    }
    else{
        alert('wrond password');
    }

    document.getElementById('amount').value = '';
    document.getElementById('pin-number').value = '';
})