const fetchMenuItems=async()=>{
  const response=await axios.get("https://davids-restaurant.herokuapp.com/menu_items.json?category=")
  console.log(response.data)

}