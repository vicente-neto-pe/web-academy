const main = document.querySelector("main");
const input = document.querySelector("input");
const form = document.querySelector("form");
form.addEventListener("submit", redirect)
function redirect(event){ 
    console.log("trigered")
    event.preventDefault();
    fetch(`http://localhost:3333/${input.value}`).then(res=>{
        Promise.resolve(res.text()).then(text=>{
            main.innerHTML = `${text}`;
        })
    })
    
}
