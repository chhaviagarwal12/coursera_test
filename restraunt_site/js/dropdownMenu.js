function createLiElement(idSelector){
    idSelector.innerHTML=` <li class="active" id="firstLI">
    <a href="#">
      <span class="material-icons">restaurant</span><br class="hidden-xs"> Menu</a>
  </li>
  <li><hr class="dropdown-divider"></li>
  <li>
    <a href="#">
     <span class="material-icons">info</span><br class="hidden-xs"> About</a>
  </li>
  <li><hr class="dropdown-divider"></li>
  <li>
    <a href="#">
     <span class="material-icons">star</span><br class="hidden-xs"> Awards</a>
  </li> 
  <li id="phone" class="d-none d-sm-block">
             <a href="tel:410-602-5008">
              <span class="material-icons">phone_android</span><br class="hidden-xs"> 410-602-5008</a><div>* We Deliver</div>
           </li>`



}

function listenEvent(){
    console.log("event resize trigger")
    const homeMenu=document.querySelector('#nav-list')
    const dropDownButton=document.querySelector('#dropdownMenuButton1')
    const dropDown=document.querySelector('#dropdown')
    if(window.innerWidth > 576){
        dropDownButton.classList.add('d-none')
        dropDown.classList.add('d-none')
        homeMenu.classList.remove('d-none')
        createLiElement(homeMenu)
        }
        if(window.innerWidth<=575){
            homeMenu.classList.add('d-none')
            dropDownButton.classList.remove('d-none')
            dropDown.classList.remove('d-none')
            createLiElement(dropDown)
         
        }
}


window.addEventListener('resize',
listenEvent 
)

if(window.location.reload){
    listenEvent()  
}