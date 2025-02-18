// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.


//Buttons
const monthlyPlanBtn = document.getElementById('monthly-plan-btn')
const annuallyPlanBtn = document.getElementById('annually-plan-btn')
const paymentBtns = document.getElementById('payment-recurrence')

//Prices
const basicPlanPrice = document.getElementById('basic-plan-price')
const basicPlanLabel = document.getElementById('basic-plan-label')

const standardPlanPrice = document.getElementById('standard-plan-price')
const standardPlanLabel = document.getElementById('standard-plan-label')

const premiumPlanPrice = document.getElementById('premium-plan-price')
const premiumPlanLabel = document.getElementById('premium-plan-label')

paymentBtns.addEventListener('click', function(params) {
    if(params.target.id === "annually-plan-btn"){
        monthlyPlanBtn.classList.remove('drop-shadow')
        monthlyPlanBtn.classList.remove('bg-white')
        monthlyPlanBtn.classList.add('border-[0.5px]')
        monthlyPlanBtn.classList.add('border-white')
        monthlyPlanBtn.setAttribute('aria-pressed', 'false')
        

        annuallyPlanBtn.classList.add('drop-shadow')
        annuallyPlanBtn.classList.add('bg-white')
        annuallyPlanBtn.classList.remove('border-[0.5px]')
        annuallyPlanBtn.classList.remove('border-white')
        annuallyPlanBtn.setAttribute('aria-pressed', 'true')

        basicPlanPrice.innerHTML = '$6.99 <span class="text-base font-normal">/ month</span>'
        basicPlanLabel.innerText = 'Billed annually ($84)'
      
        standardPlanPrice.innerHTML = '$15.99 <span class="text-base font-normal">/ month</span>'
        standardPlanLabel.innerText = 'Billed annually ($192)'
      
        premiumPlanPrice.innerHTML = '$25.99 <span class="text-base font-normal">/ month</span>';
        premiumPlanLabel.innerText = 'Billed annually ($312)'
    }else if(params.target.id === "monthly-plan-btn"){
        annuallyPlanBtn.classList.remove('drop-shadow')
        annuallyPlanBtn.classList.remove('bg-white')
        annuallyPlanBtn.classList.add('border-[0.5px]')
        annuallyPlanBtn.classList.add('border-white')
        annuallyPlanBtn.setAttribute('aria-pressed', 'false');

        monthlyPlanBtn.classList.add('drop-shadow')
        monthlyPlanBtn.classList.add('bg-white')
        monthlyPlanBtn.classList.remove('border-[0.5px]')
        monthlyPlanBtn.classList.remove('border-white')
        monthlyPlanBtn.setAttribute('aria-pressed', 'true');
        

        basicPlanPrice.innerHTML = '$9.99 <span class="text-base font-normal">/ month</span>'
        basicPlanLabel.innerText = 'Billed monthly'
      
        standardPlanPrice.innerHTML = '$19.99 <span class="text-base font-normal">/ month</span>';
        standardPlanLabel.innerText = 'Billed monthly'
      
        premiumPlanPrice.innerHTML = '$29.99 <span class="text-base font-normal">/ month</span>';
        premiumPlanLabel.innerText = 'Billed monthly'
    }
} )