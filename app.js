

/*function addItemToLIst () {

    const productName = document.getElementsByID('itemdame');

    const productPrice = document.getElementsById('itemPrice');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td> 1 </td>
        <td> ${productName.innerHTML} </td>
        <td> ${productPrice.innerHTML} </td>
        <td> 1 </td>
        <td> <button class="btn removeButton">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);

} 

let a = 5
let b;

let c = Number(7);

let d;

let e = Number(a + c );

console.log(e); 

function removeProduct () {
   let l = document.querySelector('.removeButton');
        l.parentElement.parentElement.remove();
    
}
 
*/ 

 

function alphanumeric(data) { 
    let letters = /^[0-9a-zA-Z]+$/;
    if (letters.test(data)) {
      return true;
    }
    return false;
  }

  function validateEmail(data) {  
    let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(testData.test(data)) {
      return true;
    }
    return false;
  } 

  function validateNumber(data) {
      let testNumber = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
      if(testNumber.test(data)) {
          return true;
      } else 
      return false;
  }

  document.getElementById('inputName').onblur = function() {
    let status = document.getElementById('inputName').value;
    if (status.length < 3) {
      document.getElementById('errorText').innerHTML = 'Name field is empty or less than 3 characters!'; 
    } else if (!alphanumeric(status)) {
      document.getElementById('errorText').innerHTML = 'Invalid characters!';  
    } else {
      document.getElementById('errorText').innerHTML = '';
    }
  };

  document.getElementById('emailInput').onblur = function() {
    let status = document.getElementById('emailInput').value;
    if (status.length < 0) {
      document.getElementById('errorMail').innerHTML = 'Email field is empty';
      
    } else if (!validateEmail(status)) {
      document.getElementById('errorMail').innerHTML = 'Invalid email address!';
      
    } else {
      document.getElementById('errorMail').innerHTML = '';
       
    }
  };

  document.getElementById('inputNumber').onblur = function() {
    let status = document.getElementById('inputNumber').value;
    if (status.length < 0) {
      document.getElementById('errorNumber').innerHTML = 'Number field is empty';
      
    } else if (!validateNumber(status)) {
      document.getElementById('errorNumber').innerHTML = 'Only number can be in this field  !';
      
    } else {
      document.getElementById('errorNumber').innerHTML = '';
       
    }
  };

  function showAlert(message, className) {
      const div = document.createElement('div');

      div.className = `alert ${className}`;

      div.appendChild(document.createTextNode(message));

      const container = document.querySelector ('#gadgets');

      const gadgetItem = document.querySelector('.gadgetItem');

      container.insertBefore(div, gadgetItem);

      setTimeout(function() {
          document.querySelector('.alert').remove()
      }, 2000);
  }
  



function getTotalPrice () {

    var totalPrice = document.querySelector('.totalAmount'); 
    var tds = document.getElementById('tableCounts').getElementsByTagName('td'); 
    var sum = 0;
    for (var i = 0; i < tds.length; i++) {
        if (tds[i].className == "count-me") {
            sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      
  }

  totalPrice.innerHTML = sum;   

  console.log(sum);

}


document.getElementById('cartButton').addEventListener('click', function(e) {


    const productName = document.getElementById('itemName');

    const productPrice = document.getElementById('itemPrice');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML =  `
        <td>  </td>
        <td> ${productName.innerHTML} </td>
        <td class= "count-me"> ${productPrice.innerHTML} </td>
        <td > <button class= "btn qty_btn" onclick="decrementBtn()" >-</button><p class="digit qtyDigit"> 1 </p><button class= "btn qty_btn" id="add" onclick="addToDigit()">+</button> 
        </td>
        <td> <button class="btn removeButton" onclick="removeProduct()" >Remove</button> </td>
       
    
    `
    ; 

    listItem.appendChild(row);

    getTotalPrice ();  

    showAlert('SAMSUNG TV has been added to cart', 'success');

})

  
function addToDigit () {

    let num = document.querySelector('.qtyDigit');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);

} 

function decrementBtn() {
    let num = document.querySelector('.qtyDigit');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProduct () {
    let l = document.querySelector('.removeButton');
         l.parentElement.parentElement.remove();
     
 }

 
document.getElementById('cartButtonTwo').addEventListener('click', function(e){

    const productNameTwo = document.getElementById('itemNameTwo');

    const productPriceTwo = document.getElementById('itemPriceTwo');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td>  </td>
        <td> ${productNameTwo.innerHTML} </td>
        <td class= "count-me"> ${productPriceTwo.innerHTML} </td>
        <td> <button class= "btn qty_btn" onclick="decrementBtnTwo()">-</button><p class="digit qtyDigitTwo"> 1 </p> <button class= "btn qty_btn" onclick="addToDigitTwo()" >+</button> 
        </td>
        <td> <button class="btn removeButtonTwo" onclick="removeProductTwo()">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);

    getTotalPrice ();  
    
    showAlert('PIXEL 4A has been added to cart', 'success');
   

})

function addToDigitTwo () {

    let num = document.querySelector('.qtyDigitTwo');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);


} 

function decrementBtnTwo() {
    let num = document.querySelector('.qtyDigitTwo');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProductTwo () {
    let l = document.querySelector('.removeButtonTwo');
         l.parentElement.parentElement.remove();
     
 }


 document.getElementById('cartButtonThree').addEventListener('click', function(e) {

    const productName = document.getElementById('itemNameThree');

    const productPrice = document.getElementById('itemPriceThree');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td>  </td>
        <td> ${productName.innerHTML} </td>
        <td class= "count-me"> ${productPrice.innerHTML} </td>
        <td> <button class= "btn qty_btn" onclick="decrementBtnThree()">-</button><p class="digit qtyDigitThree"> 1 </p> <button class= "btn qty_btn" onclick="incrementBtnThree()">+</button> 
        </td>
        <td> <button class="btn removeButtonThree" onclick="removeProductThree()">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);

    getTotalPrice (); 

    showAlert('PS 5 has been added to cart', 'success');
})  

function incrementBtnThree () {

    let num = document.querySelector('.qtyDigitThree');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);


} 

function decrementBtnThree() {
    let num = document.querySelector('.qtyDigitThree');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProductThree () {
    let l = document.querySelector('.removeButtonThree');
         l.parentElement.parentElement.remove();
     
 }

document.getElementById('cartButtonFour').addEventListener('click', function(e) {

    const productName = document.getElementById('itemNameFour');

    const productPrice = document.getElementById('itemPriceFour');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td>  </td>
        <td> ${productName.innerHTML} </td>
        <td class= "count-me"> ${productPrice.innerHTML} </td>
        <td> <button class= "btn qty_btn" onclick="decrementBtnFour()">-</button><p class="digit qtyDigitFour"> 1 </p><button class= "btn qty_btn" onclick="incrementBtnFour()">+</button> 
        </td>
        <td> <button class="btn removeButtonFour" onclick="removeProductFour()">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);

    getTotalPrice ();

    showAlert('MACBOOK AIR has been added to cart', 'success');
})

function incrementBtnFour() {

    let num = document.querySelector('.qtyDigitFour');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);


} 

function decrementBtnFour() {
    let num = document.querySelector('.qtyDigitFour');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProductFour () {
    let l = document.querySelector('.removeButtonFour');
         l.parentElement.parentElement.remove();
     
 }

document.getElementById('cartButtonFive').addEventListener('click', function(e) {

    const productName = document.getElementById('itemNameFive');

    const productPrice = document.getElementById('itemPriceFive');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td>  </td>
        <td> ${productName.innerHTML} </td>
        <td class= "count-me"> ${productPrice.innerHTML} </td>
        <td> <button class= "btn qty_btn" onclick="decrementBtnFive()">-</button><p class="digit qtyDigitFive"> 1 </p> <button class= "btn qty_btn" onclick="incrementBtnFive()">+</button> 
        </td>
        <td> <button class="btn removeButtonFive" onclick="removeProductFive()">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);
    getTotalPrice ();

    showAlert('APPLE WATCH has been added to cart', 'success');
})

function incrementBtnFive() {

    let num = document.querySelector('.qtyDigitFive');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);


} 

function decrementBtnFive() {
    let num = document.querySelector('.qtyDigitFive');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProductFive () {
    let l = document.querySelector('.removeButtonFive');
         l.parentElement.parentElement.remove();
     
 }

document.getElementById('cartButtonSix').addEventListener('click', function(e) {

    const productName = document.getElementById('itemNameSix');

    const productPrice = document.getElementById('itemPriceSix');

    const listItem = document.getElementById('itemList');

    //create row
    const row = document.createElement('tr');
    
    //insert item to columns
    row.innerHTML = `
        <td> </td>
        <td> ${productName.innerHTML} </td>
        <td class= "count-me"> ${productPrice.innerHTML} </td>
        <td class ="qtyDigit"> <button class= "btn qty_btn" onclick="decrementBtnSix()">-</button><p class="digit qtyDigitSix"> 1 </p> <button class= "btn qty_btn" onclick="incrementBtnSix()">+</button> 
        </td>
        <td> <button class="btn removeButtonSix" onclick="removeProductSix()">Remove</button> </td>
    
    `
    ;

    listItem.appendChild(row);
    getTotalPrice ();

    showAlert('AIRPOD has been added to cart', 'success');
})

function incrementBtnSix () {

    let num = document.querySelector('.qtyDigitSix');
    let number;
    let counter;
    
    number = Number(num.innerText);

    counter = number + 1;

    num.innerText = counter;

    console.log(counter);


} 

function decrementBtnSix() {
    let num = document.querySelector('.qtyDigitSix');
    let number;
    let counter;
    
    number = Number(num.innerText);

    if (number <= 1) {
        alert("You cant have less that 1 item in the cart");
        counter = number;

    } else {
        counter = number - 1;
    }

    num.innerText = counter;

    console.log(counter); 
}

function removeProductSix () {
    let l = document.querySelector('.removeButtonSix');
         l.parentElement.parentElement.remove();
     
 }



 function payWithPaystack() {
   // e.preventDefault();
    let handler = PaystackPop.setup({
      key: 'pk_test_501da37deb68e5ad9a2388c95ca26dea505dbee5', // Replace with your public key
      email: document.getElementById("emailInput").value,
      amount: parseInt(document.getElementById('amount').innerText) * 100 ,
     // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        showSummary(); 
      }
    });
    handler.openIframe();
  }

document.getElementById('checkout').addEventListener('click', function(e) {
    e.preventDefault();

   payWithPaystack();

}) 

function showSummary () {
    var divElement = document.createElement('div');
    divElement.classList.add('modal-body');
    divElement.innerHTML = 'Thank you, Your order has been recieved';
    divElement.style.backgroundColor = 'white';

}