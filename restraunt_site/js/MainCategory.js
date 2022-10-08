const menu=document.querySelectorAll('#firstLI,#menu-tile')


for(m of menu)
m.addEventListener('click',onClickMenu)

async function onClickMenu(){
//===fetching data for menu categories 
const response=  await axios.get('https://davids-restaurant.herokuapp.com/categories.json')
const menuCategories=response.data
if(menuCategories===null || menuCategories===undefined ){
alert("Data not available from API")
}
//====hiding image and loading menu categories tile
const singleCategory=document.querySelector('#single-category');
document.querySelector('.img-fluid').classList.add('d-none')
document.querySelector('#menu-items-category').classList.add('d-none')
document.querySelector('#home-tiles').classList.add('d-none')
document.querySelector('#menu-categories-title').innerHTML="Menu Categories"
document.querySelector('hr').classList.remove('d-none')
singleCategory.classList.remove('d-none')

//===creating new divs

singleCategory.innerHTML=`
    <div class="food-categories col-md-4 col-sm-5 col-xs-6 col-xxs-12" >
      <div class="category-tile" id=${menuCategories[0].short_name}>
        <img id="main-category-image" width="200" height="200" src="images/menu/${menuCategories[0].short_name}/${menuCategories[0].short_name}.jpg" class='img-fluid' alt="image not available">
        <span class='main-category'>${menuCategories[0].name}</span>
      </div>`
  for(let i=1;i<=menuCategories.length-1;i++){
  const foodCategory=document.querySelector('.food-categories')
  const clone=foodCategory.cloneNode(true)
  clone.querySelector('.category-tile').id=menuCategories[i].short_name
  clone.querySelector('.main-category').innerHTML=menuCategories[i].name
  clone.querySelector('#main-category-image').src=`images/menu/${menuCategories[i].short_name}/${menuCategories[i].short_name}.jpg`
  singleCategory.appendChild(clone)
}
//========================
//=====on click of menu category tile
const menuItems=document.querySelectorAll('.category-tile')

// const arrMenuItems=Array.from(menuItems) //this method is use to convert nodeList to array

// for (let menuItem of menuItems) { //not using let or const in for..of loop makes that variable a global variable
  
//   menuItem.addEventListener('click',()=>{
    
//     fetchMenuItems(menuItem.id,menuCategories[i].name)
//   }
//  )
// }
for(let i=0;i<menuItems.length-1;i++){
  menuItems[i].addEventListener('click',()=>{
    fetchMenuItems(menuItems[i].id,menuCategories[i].name)
  }
 ) 
}


//arrow functions should be called without paranthesis
//  fetchMenuItems})




}

//=============for clicking in specials tile on home 
const special=document.querySelector('#specials-tile')
console.log(special)
special.addEventListener('click',()=>{

  fetchMenuItems('SP','SPECIALS')
})