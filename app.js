//selectors
var cashInHand = 0
const textBox1 = document.querySelector("#add")
const textBox2 = document.querySelector("#sub")
const button1 = document.querySelector("#btnadd")
const button2 = document.querySelector("#btnsub")
const histryDiv = document.querySelector(".entryList")
const cashbal = document.querySelector("#cinbalance")

//event listerners
document.addEventListener('DOMContentLoaded', getEntry)
button1.addEventListener('click', genlist)
button2.addEventListener('click', genlist)

//functions
function genlist(event) {
    event.preventDefault()
    if (event.target.innerText == 'add') {
        const boxvalue = parseInt(textBox1.value)
        if (boxvalue) {
            const listItem = document.createElement('li')
            listItem.innerText = boxvalue
            listItem.classList.add('list-item-income')
            histryDiv.appendChild(listItem)
            cashInHand += boxvalue
            cashbal.innerText = cashInHand
            saveToLocalincome(boxvalue)



        }
    } else {
        const boxvalue = parseInt(textBox2.value)
        if (boxvalue) {
            const listItem = document.createElement('li')
            listItem.innerText = boxvalue
            listItem.classList.add('list-item-expense')
            histryDiv.appendChild(listItem)
            cashInHand -= boxvalue
            cashbal.innerText = cashInHand
            saveToLocalexpense(boxvalue)
        }
    }
}



function saveToLocalincome(boxvalue) {

    let entryincomeArray
    if (localStorage.getItem("entryincomeArray") === null) {

        entryincomeArray = []

    } else {
        entryincomeArray = JSON.parse(localStorage.getItem('entryincomeArray'))


    }
    entryincomeArray.push(boxvalue)
    localStorage.setItem("entryincomeArray", JSON.stringify(entryincomeArray))


}

function saveToLocalexpense(boxvalue) {
    let entryexpenseArray
    if (localStorage.getItem("entryexpenseArray") === null) {

        entryexpenseArray = []

    } else {
        entryexpenseArray = JSON.parse(localStorage.getItem('entryexpenseArray'))

    }
    entryexpenseArray.push(boxvalue)
    localStorage.setItem("entryexpenseArray", JSON.stringify(entryexpenseArray))

}
// localStorage.clear()

function getEntry() {
    let entryincomeArray
    if (localStorage.getItem("entryincomeArray") === null) {

        entryincomeArray = []

    } else {
        entryincomeArray = JSON.parse(localStorage.getItem('entryincomeArray'))

    }
    entryincomeArray.forEach(element => {
        console.log('hello')
        const listItem = document.createElement('li')
        listItem.innerText = element
        listItem.classList.add('list-item-income')
        histryDiv.appendChild(listItem)
        cashInHand += element
        cashbal.innerText = cashInHand
    });

    //expense getentries
    let entryexpenseArray
    if (localStorage.getItem("entryexpenseArray") === null) {

        entryexpenseArray = []

    } else {
        entryexpenseArray = JSON.parse(localStorage.getItem('entryexpenseArray'))

    }
    entryexpenseArray.forEach(element2 => {
        const listItem = document.createElement('li')
        listItem.innerText = element2
        listItem.classList.add('list-item-expense')
        histryDiv.appendChild(listItem)
        cashInHand -= element2
        cashbal.innerText = cashInHand

    });



}

// localStorage.clear()