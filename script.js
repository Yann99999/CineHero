var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["nome"] = document.getElementById("nome").value;
    formData["data"] = document.getElementById("data").value;
 
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("filmList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.data;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)"><span class="icon-pencil"></span></a>
                       <a onClick="onDelete(this)"><span class="icon-cross"></span></a>`;
}

function resetForm() {
    document.getElementById("ID").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
  
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("data").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.nome;
    selectedRow.cells[2].innerHTML = formData.data;
   
}

function onDelete(td) {
    if (confirm('Tem certeza de que quer removê-lo da lista?')) {
        row = td.parentElement.parentElement;
        document.getElementById("filmList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("ID").value == "") {
        isValid = false;
        document.getElementById("IDValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IDValidationError").classList.contains("hide"))
            document.getElementById("IDValidationError").classList.add("hide");
    }
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("nomeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeValidationError").classList.contains("hide"))
            document.getElementById("nomeValidationError").classList.add("hide");
    }
    if (document.getElementById("data").value == "") {
        isValid = false;
        document.getElementById("dataValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("dataValidationError").classList.contains("hide"))
            document.getElementById("dataValidationError").classList.add("hide");
    }
    return isValid;
}