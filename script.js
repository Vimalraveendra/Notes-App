const editBtn = document.getElementById('edit');
const delBtn = document.getElementById('delete')
const notesEl = document.querySelector('.notes')
const textAreaEl = document.querySelector('.textarea')
const main = document.querySelector('.main')

function saveText(e){
    const {value} = e.target
    console.log(value)
   textAreaEl .innerHTML=marked(value)
}

editBtn.addEventListener('click',saveText)
textAreaEl.addEventListener('input',saveText)