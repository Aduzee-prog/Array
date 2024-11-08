var allStudent = []
var newIndex = 0
function toast(message = 'Welcome', color = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function addStudents() {
    if (floatingInput.value == '') {
        toast('Enter Your Name', 'red', 1500)
    } else {
        allStudent.push(floatingInput.value)
        display()
        console.log(allStudent);
        toast('Student Added Successfully', 'green', 1500)
        document.getElementById("floatingInput").value = ''
        
    }
}   

function deleteStudent(index){
    console.log("index");
    var confirmDelete = confirm('Be sure to delete')
    console.log(confirmDelete);
    if(confirmDelete){
        allStudent.splice(index,1) 
        console.log(allStudent);
        toast('Deleted successfully', 'red', 1500)
        if(allStudent.length < 1){
            table.innerHTML = ""
        }else{
            display()
        }
    }else{
        display()
    }
}

function edit(index) {
    newIndex = index
}

function confirm(){
    if(studentUpdate.value == ""){
        toast('Enter Update', 'red', 1500)
    }else{
        allStudent.splice(newIndex,1,studentUpdate.value)
        console.log(allStudent);
        toast('Edited Successfully', 'green', 1500)
        document.getElementById('studentUpdate').value =""
        display()
        
    } 
}

function display() {
    
    displayStudent.innerHTML = "none"
    displayStudent.innerHTML = `
        <table class="table bg-secondary table-bordered table-secondary" id="table">
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </table>`
    for (var i = 0; i < allStudent.length; i++) {
        console.log(allStudent[i]);
        table.innerHTML += `
            <tr>    
                <td>${i + 1}</td>
                <td>${allStudent[i]}</td>
                <td>
                    <button onclick="edit(${i})" class="btn btn-primary col-2 col-sm-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                    <button onclick="deleteStudent(${i})" class="btn btn-danger col-2 col-sm-3">Delete</button>
                </td>
            </tr>
            `
    }
}
