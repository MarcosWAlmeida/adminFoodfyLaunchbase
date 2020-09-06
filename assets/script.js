const recipes = document.querySelectorAll('.receitas')
const show = document.querySelector('.show-content')
const buttons = document.querySelectorAll('.button')
const content = document.querySelectorAll('.content');


for (let rec of recipes) {
    rec.addEventListener("click", function(){
        const get_id = rec.getAttribute("id")
        window.location.href =  `/rec_details/${get_id}`
        
    })
}


for (let [i,button] of buttons.entries()){
    button.addEventListener("click", ()=>{
        if(content[i].classList.contains("show")){
            content[i].classList.remove("show")
            content[i].classList.add('hide')
            button.innerHTML = "MOSTRAR"
        } else {
            content[i].classList.add('show')
            content[i].classList.remove("hide")
            button.innerHTML = "ESCONDER"
        }
    })
}



// show.addEventListener('click' , () => {
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// })




