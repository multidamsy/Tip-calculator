const billInput = document.getElementById('input');
const tip1 = document.getElementById('enter1');
const peopleInput = document.getElementById('inputPeople');
const button = document.getElementById('calc');
const tipAmount = document.getElementById('amount');
const div1 = document.getElementById('top1');

function calculate() {
    button.addEventListener('click', function() {
        var ans = billInput.value * 0.05 / peopleInput.value;
        var ans2 = billInput.value + ans;
        
        document.getElementById("result1").innerHTML = ans;
        document.getElementById("result2").innerHTML = ans2;
    })
}
calculate();

