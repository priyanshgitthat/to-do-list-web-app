

let addBtn = document.querySelector('.add-btn')
console.log(addBtn);

let input = document.querySelector('.input')
console.log(input);

let ul = document.querySelector('.task-list')

addBtn.addEventListener('click', () => {
    if (input.value=== ""){
        alert('Please Write Something !')
        return
    }
    else{

        let li = document.createElement('li')
        li.textContent = input.value.trim()
        let span = document.createElement('span')
        span.textContent = '\u00d7'

        li.appendChild(span)
        ul.appendChild(li)
        
    }
    input.value = '';
    savedata();

    
})

ul.addEventListener('click', (e) => {
    if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove()
        savedata();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        savedata();
    }  
})

function savedata() {
    localStorage.setItem('data', ul.innerHTML);
}

function showdata(){
    ul.innerHTML = localStorage.getItem('data')
}
showdata()