document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    
    const pin = document.getElementById('pin-number').value;
    
    if(phoneNumber == '5' && pin == '1234'){
        console.log('you are logged in');
        window.location.href = './home.html'
    }
    else{
        alert('Wrong phone or pin');
    }
    
    
    
    
    console.log('Hello google');
    
})