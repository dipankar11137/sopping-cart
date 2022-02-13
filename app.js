// case for
function updateProductNumber(product, price, isIncrissing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncrissing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();

}
// total amount
function getInputvalue(product) {
    const productNumber = parseInt(document.getElementById(product + '-number').value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handel phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);


});

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false);

});

// handel case increase decrease event 
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

});

