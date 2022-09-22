const {hash} = window.location;
const message=atob(hash.replace('#',''))
if(message){
   document.querySelector('#message-form').classList.add('hide')
   document.querySelector('#message-show').classList.remove('hide')
   document.querySelector('h1').innerHTML=message
}




document.querySelector('form').addEventListener("submit",event=>{
event.preventDefault();
document.querySelector('#message-form').classList.add('hide')
document.querySelector('#link-form').classList.remove('hide')
const msg=document.querySelector('#msgInput').value
const encrypted=btoa(msg)
console.log('msg is:' ,msg)
const input=document.querySelector('#link-input')
input.value=`${window.location}#${encrypted}`
input.select()
})







// createMsg.addEventListener('click',()=>{
//    window.location.replace("link.html")
// })

/*window.location gives object with all its properties and methods but 
by converting it into a string it only gives url of current page */

/*conversion steps of ascii to base 64
1.take string a convert it into ascii values.
2.convert those ascii values in binary.
3.join all the binary numbers together(example-01+010+111=01010111)
4.divide them into group of 6 characters.
5.convert these binary groups into equivalent base64.

btoa() function is used to convert ascii to base 64 and atob() works other way round*/

