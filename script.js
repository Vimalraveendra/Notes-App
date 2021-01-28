


const addBtn = document.getElementById('add')
const notesEL = JSON.parse(localStorage.getItem('notes'))



if(notesEL){
    notesEL.forEach(note=>{
        createNewNote(note)
    })
}

function createNewNote(text=""){
    const notes = document.createElement('div');
     notes.classList.add('notes');
     notes.innerHTML=`
                <div class="tools">
                <button class="edit"> <i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main hidden"></div>
                <textarea name="text" class="textarea" ></textarea>
     `
   
                const editBtn =notes.querySelector('.edit');
                const delBtn =notes.querySelector('.delete')
                const textAreaEl = notes.querySelector('.textarea')
                const mainEl = notes.querySelector('.main')
                if(text.length>0){
                        textAreaEl .value= text;
                }
                
                   

delBtn.addEventListener('click',()=>{
   notes.remove()
   updateLs()
})

editBtn.addEventListener('click',()=>{
    mainEl.classList.toggle('hidden');
    textAreaEl.classList.toggle('hidden')
})

textAreaEl.addEventListener('input',(e)=>{
    const {value} = e.target
   mainEl.innerHTML=marked(value)
   updateLs()
})

document.body.appendChild(notes)
}

function updateLs(){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note=>{
        notes.push(note.value)
    })
  localStorage.setItem('notes',JSON.stringify(notes))
}


addBtn.addEventListener('click',createNewNote)



