const btn = document.querySelector("#button")

function showAlert(alertMsg) {
    document.getElementById("loading").style.display = "none"
    const alertDiv = document.createElement('div')
    alertDiv.className ="alert alert-danger"
    alertDiv.appendChild(document.createTextNode(alertMsg))
    
    const card = document.querySelector(".card")
    const heading = document.querySelector(".heading")
    card.insertBefore(alertDiv, heading)

    setTimeout(function() {
        document.querySelector(".alert").remove()
    }, 2000)
}



function calculateResults(e) {
    const loanAmount = document.getElementById("loan-amount")
    const interest = document.getElementById("interest")
    const yearsOfLoan = document.getElementById("years-to-pay")
    const monthlyPayment = document.getElementById("monthly-payment")
    const totalAmount = document.getElementById("total-amount")
    const totalInterest = document.getElementById("total-interest")

    const principalAmount = parseInt(loanAmount.value)
    const interestValue = parseFloat((interest.value/100)/12)
    const totalMonthsOfLoan = parseInt(yearsOfLoan.value * 12)
    const x = Math.pow(1+interestValue, totalMonthsOfLoan)
    const monthlyAmount = (principalAmount * x * interestValue) / (x - 1)


    if (isFinite(monthlyAmount)) {
        monthlyPayment.value = monthlyAmount.toFixed(2)
        totalAmount.value = (monthlyAmount * totalMonthsOfLoan).toFixed(2)
        totalInterest.value = (monthlyAmount * totalMonthsOfLoan - principalAmount).toFixed(2)
        document.getElementById("loading").style.display = "none"
        document.getElementById("results").style.display = "block";
    } else {
        showAlert("Please enter all the inputs")
    }

    e.preventDefault()
}



btn.addEventListener("click", function (e) {
    document.getElementById("loading").style.display = "block"
    document.getElementById("results").style.display = "none"
    setTimeout(calculateResults, 2000)
    e.preventDefault()
})
