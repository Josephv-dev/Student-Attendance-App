// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let studentName = document.getElementById("student-name")
let presentStudentList = document.getElementById("present-student-list")
let countEl = document.getElementById("count-el")
let savedRecords = document.getElementById("saved-records")

let studentPresent = []

function markPresnt(){
    let name = studentName.value.trim()

    if(name == ""){
        alert("Please enter a name")
        return
    }

    if (studentPresent.includes(name)){
        alert(name + " is already marked present")
        return
    }

    if (/\d/.test(name)){
        alert("Name cannot contain numbers")
        return
    }

    studentPresent.push(name)

    let li = document.createElement("li")
    li.textContent = name
    presentStudentList.appendChild(li)

    countEl.textContent = studentPresent.length + " students present"
    studentName.value = ""
    studentName.focus()
}

function save(){
    if(studentPresent.length == 0){
        alert("No students present to save")
        return
    }

    const today = new Date()
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const formattedDate = today.toLocaleDateString("en-US", options)

    let recordLi = document.createElement("li")
    let studentListStr = studentPresent.join(", ")

    recordLi.textContent = `${formattedDate}: ${studentPresent.length} students (${studentListStr})`
    savedRecords.appendChild(recordLi)

    studentPresent = []
    presentStudentList.innerHTML = ""
    countEl.textContent = "0 students present"
    console.log("Attendance saved for " + formattedDate)
}

function refresh(){
    studentPresent = []
    presentStudentList.innerHTML = ""
    countEl.textContent = "0 students present"
    savedRecords.innerHTML = ""
    studentName.value = ""

}