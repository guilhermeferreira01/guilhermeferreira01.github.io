function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["endereco"] = document.getElementById("endereco").value;
    formData["telcel"] = document.getElementById("telcel").value;
    formData["peso"] = document.getElementById("peso").value;
    formData["altura"] = document.getElementById("altura").value;
    formData["idade"] = document.getElementById("idade").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list-todo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.endereco;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telcel;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.peso;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.altura;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.idade;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telcel").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("idade").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("endereco").value = selectedRow.cells[1].innerHTML;
    document.getElementById("telcel").value = selectedRow.cells[2].innerHTML;
    document.getElementById("peso").value = selectedRow.cells[3].innerHTML;
    document.getElementById("altura").value = selectedRow.cells[4].innerHTML;
    document.getElementById("idade").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.endereco;
    selectedRow.cells[2].innerHTML = formData.telcel;
    selectedRow.cells[4].innerHTML = formData.peso;
    selectedRow.cells[5].innerHTML = formData.altura;
    selectedRow.cells[6].innerHTML = formData.idade;
}

function onDelete(td) {
    if (confirm('Deseja remover esse paciente ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list-todo").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("val").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("val").classList.contains("hide"))
            document.getElementById("val").classList.add("hide");
    }
    return isValid;
}