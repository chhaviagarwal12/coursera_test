const menu=document.querySelector('#menu')
menu.addEventListener('click',async()=>{
  //===fetching data for menu categories
  const response=  await axios.get('https://davids-restaurant.herokuapp.com/categories.json')
  const menuCategories=response.data
  //====hiding image and loading menu categories tile
  document.querySelector('.img-fluid').classList.add('d-none')
  document.querySelector('#menu-categories-title').classList.remove('d-none')
  document.querySelector('#single-category').classList.remove('d-none')
  //===creating new divs
  const singleCategory=document.querySelector('#single-category');
  singleCategory.innerHTML=`
      <div class="food-categories col-md-4 col-sm-5 col-xs-6 col-xxs-12" >
        <div class="category-tile">
          <img width="200" height="200" src="images/menu/${menuCategories[0].short_name}/${menuCategories[0].short_name}.jpg" class='img-fluid' alt="Soup">
          <span class='main-category'>${menuCategories[0].name}</span>
        </div>`
    for(let i=1;i<=8;i++){
    const foodCategory=document.querySelector('.food-categories')
    const clone=foodCategory.cloneNode(true)
    clone.querySelector('span').innerHTML=menuCategories[i].name
    clone.querySelector('img').src=`images/menu/${menuCategories[i].short_name}/${menuCategories[i].short_name}.jpg`
    singleCategory.appendChild(clone)
  }
//========================
  //=====on click of menu category tile
  const menuItems=document.querySelectorAll('.category-tile')
  console.log(menuItems)
  for(menuItem of menuItems){
    
    menuItem.addEventListener('click',()=>{
      console.log(menu)
    }
   ) 
  }
  // //arrow functions to be called without paranthesis
  //  fetchMenuItems})

//
})