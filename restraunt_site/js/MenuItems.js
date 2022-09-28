const fetchMenuItems=async(shortName)=>{
  const response=await axios.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+shortName)
  const menuItems=response.data
  
  document.querySelector('#single-category').classList.add('d-none')

}