// Classes
class Budget {
    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

class HTML {
    printBudget(amount){
        userBudge.innerHTML = `${pngCurrency}${amount}`;
        budgetLeft.innerHTML = `${pngCurrency}${amount}`;
    }

    printWarning(className){
        const messageDiv = document.querySelector('.message');
        messageDiv.classList.add(className);

        setTimeout(function(){
            messageDiv.classList.remove('message-new');
            userForm.reset();
        }, 3000);
    }

    printList(li, span, liClass,span1Class,span2Class){
        const list = document.createElement(li),
              span1 = document.createElement(span),
              span2 = document.createElement(span),
              listItem = document.querySelector('#item').value,
              listAmount = document.querySelector('#amount').value;

        list.className = liClass;
        span1.className = span1Class;
        span2.className = span2Class;
        
        list.appendChild()
        span1.innerHTML = `${listItem} ${pngCurrency}${listAmount}`;
        span2.innerHTML = `X`;

    }
    
}



// Variables
const userForm = document.querySelector('form#myForm');
const html = new HTML(),
      userBudge = document.querySelector('#budget'),
      budgetLeft = document.querySelector('#budget-left'),
      pngCurrency = 'K';

let userBudget, budget;


// Event Listeners
eventListening();
function eventListening(){

    document.addEventListener('DOMContentLoaded', function(){
        userBudget = prompt('Enter your weekly budget');
        
        if(userBudget === '' || userBudget === null || userBudget === '0'){
            window.location.reload();
        }else{
            const weeklyBudget = new Budget(userBudget);

            html.printBudget(weeklyBudget.budget);
        }
    })

    userForm.addEventListener('submit',function(e){
        e.preventDefault();
        const item = document.querySelector('#item').value,
              amount = document.querySelector('#amount').value;
        
        if(item === ''|| amount=== ''){
            html.printWarning('message-new');
        } else{
            html.printList('li','span','list-item','item1','item2');      
        }
    })
        

}