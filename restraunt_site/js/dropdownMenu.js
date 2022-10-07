function createLiElement(idSelector){
idSelector.innerHTML=`
<li id='menu'>
<a href="#">
    <span class="material-icons" >restaurant</span><br class="hidden-xs"> Menu</a>
</li>
<li id='about'>
  <a href="#">
   <span class="material-icons">info</span><br class="hidden-xs"> About</a>
</li>
<li id='awards'>
  <a href="#">
   <span class="material-icons">star</span><br class="hidden-xs"> Awards</a>
</li>
<li id="phone" class="hidden-xs">
  <a href="tel:410-602-5008">
   <span class="material-icons">phone_android</span><br class="hidden-xs"> 410-602-5008</a><div>* We Deliver</div>
</li>`
}



window.addEventListener('resize',()=>{
    if(window.innerWidth > 576){
       
        document.querySelector('#dropdownMenuButton1').classList.add('d-none')
        const homeMenu=document.querySelector('#nav-list')
        homeMenu.classList.remove('d-none')
        createLiElement(homeMenu)
    }
    if(window.innerWidth<=575){
        
        document.querySelector('#nav-list').classList.add('d-none')
        document.querySelector('#dropdownMenuButton1').classList.remove('d-none')
        const dropDown=document.querySelector('#dropdown')
        dropDown.classList.remove('d-none')
        createLiElement(dropDown)
    }
    
})



