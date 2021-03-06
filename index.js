const washEl = document.getElementById('wash-el')
const mowEl = document.getElementById('mow-el')
const weedEl = document.getElementById('weed-el')
const serviceEl = document.getElementById('service-el')
const amountEl = document.getElementById('amount-el')
const sumEl = document.getElementById('sum-el')
const sendBtn = document.getElementById('send-btn')
let arr= []

//Adding service to an array when clicked
washEl.addEventListener('click', function(){
    const obj = {name:'Wash Car', price : 10}
    addingArrElement(obj)
})

mowEl.addEventListener('click', function(){
    const obj = {name: 'Mow Lawn' , price: 20}
    addingArrElement(obj)
})

weedEl.addEventListener('click', function(){
    const obj = {name: 'Pull weeds', price: 30}
    addingArrElement(obj)
})

function addingArrElement(obj){
    const index = arr.findIndex(Object => Object.name === obj.name)
    if(index === -1) {
        arr.push(obj)
        renderList(arr)
    }
}

//render the list
function renderList(arr){
    let listItems =''
    let price ='';
    let sum = 0
    for(let item of arr){
        listItems += `<li>${item.name} <span onClick='removeElement(${arr.indexOf(item)})'>remove</span></li>`
        price += `<li>$${item.price}</li>` 
        sum += item.price
    }
    serviceEl.innerHTML =listItems
    amountEl. innerHTML = price
    sumEl.textContent= `${sum === 0 ? '' : `$${sum}`}`
}

//removing an item from array
function removeElement(index){
    arr.splice(index, 1)
    renderList(arr)
}

sendBtn.addEventListener('click', function() {
    arr=[]
    renderList(arr)
})
