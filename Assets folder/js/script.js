const colorbutton =document.getElementById("colorbutton")
colorbutton.addEventListener('click',()=>{
    colorbutton.style.backgroundColor=colorbutton.style.backgroundColor==='blue' ? '#4caf50': 'blue'
})

function myFunction(){
    document.getElementById("paragraphClick").innerHTML = "Button has already been clicked."
}