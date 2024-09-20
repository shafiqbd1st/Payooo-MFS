document.getElementById('cashOut').addEventListener('click', function(){
   
    document.getElementById('cashOut-form').classList.remove('hidden');
    document.getElementById('addMoney-form').classList.add('hidden');
});


document.getElementById('addMoney').addEventListener('click', function(){
    document.getElementById('addMoney-form').classList.remove('hidden');
    document.getElementById('cashOut-form').classList.add('hidden');
})