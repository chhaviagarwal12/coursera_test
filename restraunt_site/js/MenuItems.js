const fetchMenuItems=async(shortName,categoryName)=>{
  const response=await axios.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+shortName)
  const menuItems=response.data
  console.log(menuItems)
  document.querySelector('#single-category').classList.add('d-none')
  document.querySelector('#menu-categories-title').innerHTML=categoryName
  document.querySelector('.special-instructions').innerHTML=menuItems.category.special_instructions
  const singleItem=document.querySelector('#menu-items-category')
  singleItem.classList.remove('d-none')
  const menu_items=menuItems.menu_items
  singleItem.innerHTML=`
  <div class="menu-item-tile col-md-6">
  <div class="row">
    <div class="col-sm-5">
      <div class="menu-item-photo">
        <div class="menu-item-short-name">${menu_items[0].short_name}</div>
        <img id="menu-item-image" class="img-fluid" width="250" height="150" 
        src="images/menu/${shortName}/${menu_items[0].short_name}.jpg" alt="Item">
      </div>
      <div class="menu-item-price">
      <span class="price-large"> &#x20b9;${menu_items[0].price_large}(pint)</span>
      <span class="price-small"> &#x20b9;${menu_items[0].price_small}(quart)</span>
      </div>
    </div>
    <div class="menu-item-description col-sm-7">
      <h3 class="menu-item-title">${menu_items[0].name}</h3>
      <p class="menu-item-details">${menu_items[0].description}</p>
    </div>
  </div>
  <hr class="d-block d-sm-none">
</div>
`
for(let i=1;i<=7;i++){
  const foodItem=document.querySelector('.menu-item-tile')
  const clone=foodItem.cloneNode(true)
  clone.querySelector('.menu-item-short-name').innerHTML=menu_items[i].short_name
  clone.querySelector('img').src=`images/menu/${shortName}/${menu_items[i].short_name}.jpg`
  clone.querySelector('.price-large').innerHTML=`&#x20b9;${menu_items[i].price_large}(pint)`
  clone.querySelector('.price-small').innerHTML=`&#x20b9;${menu_items[i].price_small}(quart)`
  clone.querySelector('.menu-item-title').innerHTML=menu_items[i].name
  clone.querySelector('.menu-item-details').innerHTML=menu_items[i].description
  singleItem.appendChild(clone)
}
// console.log(menu_items.price_small)
// if(menu_items.price_small===null){
//   document.querySelectorAll('.price-small').classList.add('d-none')
// }
// for(let i=0;i<=7;i++){
 
// }
const priceSmall=Array.from(document.querySelectorAll('.price-small'))
console.log(priceSmall)
for(let i=0;i<=7;i++){
if(menu_items[i].price_small===null){
  priceSmall[i].classList.add('d-none')
}
}
}


