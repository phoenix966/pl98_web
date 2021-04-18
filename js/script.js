
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

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
