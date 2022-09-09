//CRUD - Create , Read , Update, Delete

//Global variables
var row = null;

function Submit(){
    let dataEnterred = retrieveData();
    let readData = readingDataFromLocalStorage(dataEnterred);
    if(row == null){
        insertData(readData);
        message.innerHTML = "Data Inserted !";
    }else{
        updateData();
        message.innerHTML = "Data Updated !";
    }
   
   
    
}

//CREATE

//fonction qui extrait les donnees du formulaire
//retrieving data from form
function retrieveData(){
    let name1 = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let experience = document.getElementById("experience").value;

    let arrayData = [name1, job, experience];

    return arrayData;
}

//READ

// Data in localstorage
function  readingDataFromLocalStorage(data){

    //storing data in local storage
    let set_name = localStorage.setItem("Name", data[0]);
    let set_job = localStorage.setItem("Job", data[1]);
    let set_experience = localStorage.setItem("Experience", data[2]);

    //getting values from localstorage
    let get_name = localStorage.getItem("Name", set_name);
    let get_job = localStorage.getItem("Job", set_job);
    let get_experience = localStorage.getItem("Experience", set_experience);

    let arrayData = [get_name, get_job, get_experience];

    return arrayData;

}

//INSERT

//Insert data in the table
function insertData(data){
    row = table.insertRow(); //on cree une ligne du tableau(tr)

    let cell1 = row.insertCell(0);//on cree les cellules (td)
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = data[0]; //on insere les donnees dans la cellule
    cell2.innerHTML = data[1];
    cell3.innerHTML = data[2];
    cell4.innerHTML = `<button onlick=editData(this)>Edit</button>
                        <button onlick=deleteData(this)>Delete</button>`
}

//EDIT
//td is the value inside the column
function editData(td){
    row = td.parentElement.parentElement; // current row 
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("experience").value = row.cells[2].innerHTML;

}

//UPDATE
function updateData(){
    row.cells[0].innerHTML =  document.getElementById("name").value;
    row.cells[1].innerHTML =  document.getElementById("job").value;
    row.cells[2].innerHTML =   document.getElementById("experience").value;
    row = null;
}

//DELETE
