const rateBtn = document.querySelectorAll('.button');
const submitBtn = document.getElementById('submit');
// const rateCard = document.getElementById('rate-card');
// const thankYou = document.getElementById('thank-you-card');

var isVisible = true;

// Get value of each button
const buttonValue = (ele) => {
    var btnValue = ele.innerText;
    console.log(btnValue);
}

//toggle card visibility  button
const hideRateCard = () =>{
    document.getElementById('rate-card').style.display = 'none';
    document.getElementById('thank-you-card').style.display = 'block';
}
const showRateCard = () => {
    document.getElementById('rate-card').style.display = 'block';
    document.getElementById('thank-you-card').style.display = 'none';
}
const toggleVisibility = (event) => {
    event.preventDefault(); 
    if (isVisible == true){
        hideRateCard();
    }else{
        showRateCard();
    }
}


