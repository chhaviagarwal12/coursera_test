const menu=document.querySelector('#menu')
menu.addEventListener('click',async()=>{
  const response=  await axios.get('https://davids-restaurant.herokuapp.com/categories.json')
  const menuCategories=response.data
  console.log(menuCategories.short_name)
  document.querySelector('.img-fluid').classList.add('d-none')
  document.querySelector('#menu-categories-title').classList.remove('d-none')
  document.querySelector('#single-category').classList.remove('d-none')
  const singleCategory=document.querySelector('#single-category');
  singleCategory.innerHTML=`
      <div class="food-categories col-md-4 col-sm-5 col-xs-6 col-xxs-12" >
      <a href="single-category_soups.html">
        <div class="category-tile">
          <img width="200" height="200" src="images/menu/${menuCategories[0].short_name}/${menuCategories[0].short_name}.jpg" class='img-fluid' alt="Soup">
          <span>${menuCategories[0].name}</span>
        </div>`
 
    for(let i=1;i<=8;i++){
    
    const foodCategory=document.querySelector('.food-categories')
    const clone=foodCategory.cloneNode(true)
    console.dir(clone )
    clone.querySelector('span').innerHTML=menuCategories[i].name

    singleCategory.appendChild(clone)
  }
  
   
    
    
  

  }
  
  
)

