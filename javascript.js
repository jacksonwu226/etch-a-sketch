const container = document.querySelector('.container')
const new_size_btn = document.querySelector('.set-grid-size-btn')
const new_size = document.querySelector('#set-grid-size-input')

function deleteGrid(container){
  // let node = container.firstElementChild
  // while(node){
  //   node.remove();
  //   node = container.firstElementChild
  // }
  const everyRow = container.querySelectorAll('.rows')
  everyRow.forEach(row => {
    row.remove()
  })
}

function createGrid(size)
{
  for(let i = 0; i < size; ++i){
    const row = document.createElement('div')
    row.setAttribute('class', 'rows')
    for(let j = 0; j < size; ++j){
      const col = document.createElement('div')
      col.setAttribute('class','cols')
      row.appendChild(col)
      col.addEventListener('mouseover', ()=>{
        col.style.backgroundColor = 'black'
      })
    }
    container.appendChild(row)
  }
}

new_size_btn.addEventListener('click', () =>{
  let n = parseInt(new_size.value)
  if(n > 100 || isNaN(n) || n <1 )
    n = 16
  new_size.value = ''
  deleteGrid(container)
  createGrid(n)
  new_size.focus()
})


createGrid(16)