let countEl = document.getElementById("count-el")
let savedP = document.getElementById("saved-p")
let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

function decrement(){
    count = count - 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    savedP.textContent += countStr
    countEl.textContent = 0
    count = 0
}




