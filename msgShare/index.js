const createMsg=document.querySelector("button")
const msg=document.querySelector('#msgInput').value
console.log('msg is:' ,msg)

createMsg.addEventListener('click',()=>{
   window.location.replace("link.html")
})

