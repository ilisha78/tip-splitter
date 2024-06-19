let reset= document.getElementById("reset");
let calc= document.getElementById("calc");
let custom= document.getElementById("custom");

function calculation(){
    let bill= document.getElementById("bill").value;
    let person= document.getElementById("person").value;
    let tipPsn= document.getElementById("tipPsn");
    let tolPsn= document.getElementById("tolPsn");
    let custom= document.getElementById("custom").value;

bill = bill.replace(',', '.');
bill= parseFloat(bill);
person=parseFloat(person);
custom=parseFloat(custom);

if (isNaN(bill) || isNaN(person) || isNaN(custom) || person === 0) {
    alert("Please enter valid numbers and ensure the number of people is not zero.");
    return;
}
    function tipPerson(){
        let billPrcnt= (bill*custom)/100;
        let tipPerPsn= billPrcnt/person;
        tipPsn.innerText="$"+ tipPerPsn.toFixed(2);
    }
    function totalPerson(){
        let totalTip=  (bill*custom)/100;
        let total= bill+totalTip;
        let totalPerPerson= total/person;
        tolPsn.innerText="$"+totalPerPerson.toFixed(2);
    }
totalPerson();
tipPerson();
}

calc.addEventListener("click", calculation);
reset.addEventListener("click", ()=>{
document.getElementById("bill").value= "";
document.getElementById("person").value="";
document.getElementById("tipPsn").innerText="$0.0";
document.getElementById("tolPsn").innerText="$0.0";
document.getElementById("custom").value="";
});

// Add event listeners to percentage buttons
document.querySelectorAll('.prcnt button').forEach(button => {
    button.addEventListener('click', (e) => {
        custom.value = e.target.value;
    });
});
