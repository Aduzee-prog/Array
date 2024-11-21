var allStudent = JSON.parse(localStorage.getItem('Name')) || [];

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
        localStorage.setItem('Name', JSON.stringify(allStudent))
        display()
        console.log(allStudent);
        toast('Student Added Successfully', 'green', 1500)
        document.getElementById("floatingInput").value = ''
        display()
        
    }
}   

function deleteStudent(index){
    console.log("index");
    var confirmDelete = confirm('Be sure to delete')
    console.log(confirmDelete);
    if(confirmDelete){
        allStudent.splice(index,1,studentUpdate.value)
        localStorage.setItem('Name', JSON.stringify(allStudent)); 
        console.log(allStudent)
        toast('Deleted successfully', 'red', 1500)
        if(allStudent.length < 1){
            displayStudent.innerHTML = ""
        }else{
        allStudent.splice(index,1) 

            display()
        }
        
    }
    
}
// editing
// function deleteStudent(index){
//     var comfirmDel = confirm('comfirm')
//     if(comfirmDel){
//      allStudent.splice(index, 1)
//      display()   
//     }
// }



function edit(index) {
    newIndex = index
}

function comfirm(){
    if(studentUpdate.value == ""){
        toast('Enter Update', 'red', 1500)
    }else{
        allStudent.splice(newIndex,1,studentUpdate.value)
        console.log(allStudent);
        localStorage.setItem('Name', JSON.stringify(allStudent))
        toast('Edited Successfully', 'green', 1500)
        document.getElementById('studentUpdate').value =""
        display()
        
    } 
}

function display() {
    
    displayStudent.innerHTML = ''
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
        <button onclick="edit(${i})" class="btn btn-primary col-lg-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
        <button onclick="deleteStudent(${i})" class="btn btn-danger col-lg-3">Delete</button>
        </td>
        </tr>
        `
        var gottenStudent = localStorage.getItem('StudentName')
        var parsedBooks = JSON.parse(gottenStudent)
        
        
    }
}
display()


// const deleteAll = () => {
    
    //     // Check if allStudent array is empty
    //     if (allStudent.length === 0) {
        //         alert('No student to delete');
        //     } else {
            //         deleteAllButton.style.display = 'block';
            //         let confirmDelete = confirm('Are you sure you want to delete all students?');
            
            //         if (confirmDelete) {
                //             allStudent = []; // Clear the array
                //             localStorage.setItem('Name', JSON.stringify(allStudent)); // Update localStorage
                //             display(); // Refresh the display
                //             console.log(allStudent);
                //             deleteAllButton.style.display = 'none'; // Hide button after deletion
                //         } else {
                    //             display();
                    //         }
                    //     }
                    // };
                    
// let deleteAllButton = document.getElementById("deleteAllButton");
//     const submitButton = document.getElementById('submitButton')
//     submitButton.addEventListener('click', ()=>{
//         if(allStudent.length < 1){
//             deleteAllButton.style.display = 'none';

//         }else if(allStudent.length>=1){
//             deleteAllButton.style.display = 'block';
//         }
//     })
