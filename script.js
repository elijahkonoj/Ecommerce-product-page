let sneakers = document.querySelectorAll('.sneaker');
let shoe = document.querySelector(".shoes")
let redeem = document.getElementById("redeem")
let iconCart = document.querySelector('#icon-cart')
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
let quantity = document.querySelector(".zero")

let x = 0

sneakers.forEach((sneakers, index) =>{

  sneakers.addEventListener("click", ()=>{
     shoe.src = sneakers.src;
    
    console.log("clicked", index);

  
  });
});
  



function minus() {
   console.log("clicked")
}

function plus() {
   
    x++;
    quantity.innerText = x;
    console.log(x)
}

function minus() {
   
    x--;
    quantity.innerText = x;
    console.log(x)
}