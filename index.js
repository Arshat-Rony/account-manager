let income = document.querySelector("#income");
let food = document.querySelector("#food");
let rent = document.querySelector("#rent");
let clothes = document.querySelector("#clothes");
let totalExpense = document.querySelector("#expense")
let balance = document.querySelector("#balance")
let savingAmount = document.querySelector("#saved-amount")
let remainingBalance = document.querySelector("#remain-balance")
let save = document.querySelector("#save")
let calculateBtn = document.querySelector("#calculate")
let saveCalculatebtn = document.querySelector("#save-calculate")



function converter(input) {
    let inputValue = parseInt(input.value) || 0;
    return inputValue;
}


function expenseCalculator(cost1, cost2, cost3, earn) {
    let totalExpenses = converter(cost1) + converter(cost2) + converter(cost3);
    totalExpense.innerText = totalExpenses;
    if (converter(earn) < totalExpenses) {
        balance.innerText = "Exceed Your earned limit"
        return;
    }


    let balanceValue = converter(earn) - totalExpenses;
    balance.innerText = balanceValue;
    return balanceValue;
}




function clearValue(input1, input2) {
    for (let i of arguments) {
        i.value = ''
    }
}

calculateBtn.addEventListener("click", function () {
    if (isNaN(income.value) || income.value == "" || income.value < 0) {
        window.alert("Correct your  amount of earned money")
        income.value = ''
    } else if (rent.value == "" && food.value == "" && clothes.value == "") {
        totalExpense.innerText = "No Expenses Now"


    } else if (rent.value < 0 || food.value < 0 || clothes.value < 0) {
        window.alert("Your all value should be number")
    } else {
        expenseCalculator(food, rent, clothes, income);

    }
    clearValue(food, rent, clothes)
})

function savingCalculator() {
    let savingAmountValue = converter(income) * (converter(save) / 100);
    savingAmount.innerText = savingAmountValue;
    let newBalance = saveCalculatebtn.parentElement.previousElementSibling.lastElementChild.childNodes[1].innerText;
    reaminbalaceValue = parseInt(newBalance) - savingAmountValue;
    if (reaminbalaceValue < parseInt(newBalance)) {
        remainingBalance.innerText = "You can't save";
        return;
    }
    remainingBalance.innerText = reaminbalaceValue;
}

saveCalculatebtn.addEventListener("click", function () {
    if (save.value < 0) {
        window.alert("You can't save negative amount")
    } else {
        savingCalculator()
    }
    clearValue(income, save);
});
console.log()