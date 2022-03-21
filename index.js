const rateBtn = document.querySelectorAll('.button');
const submitBtn = document.getElementById('submit');
// const rateCard = document.getElementById('rate-card');
// const thankYou = document.getElementById('thank-you-card');

var isVisible = true;

// Click event for each rate button 
rateBtn.forEach((btn)=> {
    btn.addEventListener("click", (event) =>{
        console.log(event.target);
    });
});

const hideRateCard = () =>{
    document.getElementById('rate-card').style.display = 'none';
    document.getElementById('thank-you-card').style.display = 'block';
}
const showRateCard = () => {
    document.getElementById('rate-card').style.display = 'block';
    document.getElementById('thank-you-card').style.display = 'none';
}
//Submit button
const toggleVisibility = () => {
    if (isVisible == true){
        hideRateCard();
    }else{
        showRateCard();
    }
}

