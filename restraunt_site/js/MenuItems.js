const fetchMenuItems=async(shortName,categoryName)=>{
  const response=await axios.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+shortName)
  const menuItems=response.data
  console.log(menuItems)
  document.querySelector('#single-category').classList.add('d-none')
  document.querySelector('#menu-categories-title').innerHTML=categoryName
  const singleItem=document.querySelector('#menu-items-category')
  singleItem.classList.remove('d-none')
  
  singleItem.innerHTML=`
  <div class="menu-item-tile col-md-6">
  <div class="row">
    <div class="col-sm-5">
      <div class="menu-item-photo">
        <div class="menu-item-short-name">${menuItems.menu_items[0].short_name}</div>
        <img id="menu-item-image" class="img-fluid" width="250" height="150" 
        src="images/menu/${shortName}/${menuItems.menu_items[0].short_name}.jpg" alt="Item">
      </div>
      <div class="menu-item-price">
      <span> &#x20b9;${menuItems.menu_items[0].price_large}(pint)</span>
      <span> &#x20b9;${menuItems.menu_items[0].price_small}(quart)</span>
      </div>
    </div>
    <div class="menu-item-description col-sm-7">
      <h3 class="menu-item-title">${menuItems.menu_items[0].name}</h3>
      <p class="menu-item-details">${menuItems.menu_items[0].description}</p>
    </div>
  </div>
  <hr class="d-block d-sm-none">
</div>
`
for(let i=1;i<=7;i++){
  const foodItem=document.querySelector('.menu-item-tile')
  const clone=foodItem.cloneNode(true)
  // clone.querySelector('.category-tile').id=menuCategories[i].short_name
  // clone.querySelector('span').innerHTML=menuCategories[i].name
  // clone.querySelector('img').src=`images/menu/${menuCategories[i].short_name}/${menuCategories[i].short_name}.jpg`
  singleItem.appendChild(clone)
}

}