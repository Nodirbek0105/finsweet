let elDonate = document.querySelector('[data-donate]');
let elDonateButton = document.querySelector('[data-donate-button]');
let currentDonated = 5840
elDonateButton.addEventListener("click" , evt=>{
    evt.preventDefault()
    elDonate.textContent = `${++currentDonated} donations collected`
})
