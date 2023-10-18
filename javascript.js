const container = document.querySelector('.container')
const new_size_btn = document.querySelector('.set-grid-size-btn')
const new_size = document.querySelector('.set-grid-size')


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

createGrid(16)