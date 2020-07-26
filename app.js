function addItem(){
    var data1 = document.getElementById("data")
    console.log(data1.value)

    if(data1.value != ""){

        var li1 = document.createElement("li")
        li1.setAttribute("class","list-group-item")
        document.getElementById("list").appendChild(li1)

        var text = document.createTextNode(data1.value)
        li1.appendChild(text)

        var editButton = document.createElement("button")
        var text1 = document.createTextNode("Edit")
        editButton.setAttribute("onClick","editText(this)")
        editButton.appendChild(text1)
        li1.appendChild(editButton)

        var deleteButton = document.createElement("button")
        var text2 = document.createTextNode("Delete")
        deleteButton.setAttribute("onClick","deleteText(this)")
        deleteButton.appendChild(text2)
        li1.appendChild(deleteButton)

        document.getElementById("data").value = ""

    }
    else{
        alert("Enter Value")
    }

}

function deleteAll(){
    document.getElementById("list").innerHTML = ""
}
function deleteText(e){
    e.parentNode.remove()
}
function editText(e){


        var li1 = document.createElement("input")
        li1.setAttribute("placeholder","Enter New TODO")
        li1.setAttribute("type","text")
        li1.setAttribute("id","new")
        e.parentNode.firstChild.replaceWith(li1)

        var editButton = document.createElement("button")
        var text1 = document.createTextNode("update")
        editButton.setAttribute("onClick","updateText(this)")
        editButton.appendChild(text1)
        e.parentNode.appendChild(editButton)

        
        var edit = e.parentNode.firstChild.nextSibling
        edit.setAttribute("disabled","true")
}
function updateText(e){
    var data1 = document.getElementById("new")
    console.log(data1.value)


    if(data1.value != ""){

        var text = document.createTextNode(data1.value)
        e.parentNode.firstChild.replaceWith(text)
        e.parentNode.lastChild.remove()
        
        console.log("hiiiiiiiiiiiii")
        var s = text.nextSibling
        console.log(s+"hiiiiiiiiiiiii")
        s.disabled = false
    }
    else{
        alert("Enter Value")
    }
}