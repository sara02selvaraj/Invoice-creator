let arr= []
const washEl = document.getElementById('wash-el')
const mowEl = document.getElementById('mow-el')
const weedEl = document.getElementById('weed-el')
const serviceEl = document.getElementById('service-el')
const amountEl = document.getElementById('amount-el')
const sumEl = document.getElementById('sum-el')
const sendBtn = document.getElementById('send-btn')


washEl.addEventListener('click', function(){
    const obj = {name:'Wash Car', price : 10}
    addingArrElement(obj)
})

function addingArrElement(obj){
    const index = arr.findIndex(Object => Object.name === obj.name)
    if(index === -1) {
        arr.push(obj)
        renderList(arr)
    }
}

mowEl.addEventListener('click', function(){
    const obj = {name: 'Mow Lawn' , price: 20}
    addingArrElement(obj)
})

weedEl.addEventListener('click', function(){
    const obj = {name: 'Pull weeds', price: 30}
    addingArrElement(obj)
})

function renderList(arr){
    let listItems =''
    let price = 0
    let sum = 0
    //let span = document.createElement('span')
    //let listItems = document.createElement('li')
    //span.textContent = 'remove'
    for(let i =0 ; i< arr.length; i++){
        //listItems.textContent= arr[i].name
        //listItems.setAttribute('class', arr[i].name)
        //span.setAttribute('onclick', `removeElement(${arr.indexOf(arr[i])})`)
        //listItems.appendChild(span)
        listItems += `<li>${arr[i].name} <span onClick='removeElement(${arr.indexOf(arr[i])})'>remove</span></li>`
        if(price){
            price+=`<li>$ ${arr[i].price}</li>`
        }else{
            price=`<li>$ ${arr[i].price}</li>`
        } 
        sum += arr[i].price
    }
    //serviceEl.append(listItems)
    serviceEl.innerHTML =listItems
    amountEl. innerHTML = price
    sumEl.textContent= `$ ${sum}`
}

function removeElement(index){
    arr.splice(index, 1);
    console.log(arr)
    renderList(arr)
}

sendBtn.addEventListener('click', function() {
    arr=[]
    renderList(arr)
})
