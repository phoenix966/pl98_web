// function myFunction(x) {
//   x.classList.toggle("change");
// }

let isOpen = false
let burger = document.querySelector('.burger')
let mobile = document.querySelector('.mobile')
burger.addEventListener('click',()=>{
  if(isOpen){
    burger.classList.remove('active')
    mobile.classList.add('hide')
    isOpen = false
  } else{
    burger.classList.add('active')
    mobile.classList.remove('hide')
    isOpen = true
  }
})