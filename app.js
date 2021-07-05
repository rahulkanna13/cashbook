//selectors
const textBox1 = document.querySelector("#add")
const textBox2 = document.querySelector("#sub")
const button1 = document.querySelector("#btnadd")
const button2 = document.querySelector("#btnsub")
const histryDiv = document.querySelector(".entryList")

//event listerners
button1.addEventListener('click', genlist)

//functions
function genlist(event) {
    event.preventDefault()
    if (event.target.innerText === 'add') {
        const boxvalue = parseInt(textBox1.value)
        if (boxvalue) {
            const entrycontainer = document.createElement('div')
            entrycontainer.classList.add("entrys")
            const listItem = document.createElement('li')
            listItem.innerText = boxvalue
            listItem.classList.add('list-item')
            entrycontainer.appendChild(listItem)
            histryDiv.appendChild(entrycontainer)

        }
    } else {
        const boxvalue = parseInt(textBox2.value)
        if (boxvalue) {
            const entrycontainer = document.createElement('div')
            entrycontainer.classList.add("entrys")
            const listItem = document.createElement('li')
            listItem.innerText = boxvalue
            listItem.classList.add('list-item')
            entrycontainer.appendChild(listItem)
            histryDiv.appendChild(entrycontainer)
        }




    }