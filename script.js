let items = []
let currentID = 1
const maxLength = 50

function addTask(){
    const name = document.getElementById("taskName").value

    if (name !== ""){
        items.push({"id": currentID, "name": name, "done": false})
        currentID++
        update()
        console.log(items)
    }
}

function deleteDone() {
    items = items.filter(i => !i.done)
    update()
}

function deleteItem(id) {
    items = items.filter(i => i.id !== id)
    update()
}

function onStatusChange(event){
    const x = items.find(i => i.id === parseInt(event.target.id))
    x.done = event.target.checked
    update()
}

function createItem(item) {
    const newItem = document.createElement("li")
    const cross = document.createElement("span")
    const checkBox = document.createElement("input")
    const name = document.createElement("p")
    const hr = document.createElement("hr")
    name.innerText = item.name
    if(item.name.length > maxLength) {
        name.innerText = item.name.substring(0, maxLength - 3) + "..."
    }
    if (item.done) name.classList.add("done")

    if(currentID === 12){
        console.log("sok")
        
        
    }

    checkBox.type = "checkbox"
    checkBox.checked = item.done
    checkBox.id = item.id
    checkBox.onchange = onStatusChange
    cross.innerText = "x"
    cross.onclick = () => deleteItem(item.id)
    newItem.appendChild(checkBox)
    newItem.appendChild(name)
    newItem.appendChild(cross)
    newItem.appendChild(hr)

    return newItem
}

function update() {
    const list = document.getElementById("list")
    list.innerHTML = ""
    items.forEach(i => {
        list.appendChild(createItem(i))
    })
    if(items.length === 0) {
        const placeholder = document.createElement("li")
        placeholder.id = "no-task"
        placeholder.innerText = "No tasks added yet"
        list.appendChild(placeholder)
        
    }
    
}

function init(){
    document.getElementById("add").onclick = addTask
    document.getElementById("delete-done").onclick = deleteDone
}

init()