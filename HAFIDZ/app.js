let listTodo = [];
  
  function addTodo() {
    let location = document.getElementById("InputFile").value;
    let task = document.getElementById("InputTask").value;
  
    listTodo.push({
      no: listTodo.length + 1,
      location,
      task,
    });
  
    document.getElementById("InputFile").value = "";
    document.getElementById("InputTask").value = "";
  
    showTodo();
  }
  
  function showTodo(index) {
    if (index) {
      let listEdit = listTodo.map((el) => {
        if (el.no == index) {
          return `
            <tr>
              <td>${el.no}</td>
              <td><input type="text" id="EditTask" value="${el.task}"></td>
              <td><input type="file" id="EditLocation" value="${el.location}"></td>
              <td>
                <input type="button"  value="save" onclick="save(${el.no})">
                <input type="button"  value="cancel" onclick="cancel()">
              </td>
            </tr>
          `;
        } else {
          return `
            <tr>
              <td>${el.no}</td>
              <td>${el.task}</td>
              <td><img src="${el.location}" alt="${el.location}" width="50px"></td>
              <td>
                <input type="button" onclick="editTask(${el.no})" value="Edit">
                <input type="button" onclick="deleteTask(${el.no})" value="Delete">
              </td>
            </tr>
        `;
        }
      });
  
      document.getElementById("resultTodo").innerHTML = listEdit.join("");
    } else {
      let list = listTodo.map((el) => {
        return `
          <tr>
            <td>${el.no}</td>
            <td>${el.task}</td>
            <td><img src="${el.location}" alt="${el.location}" width="50px"></td>
            <td>
              <input type="button" onclick="editTask(${el.no})" value="Edit">
              <input type="button" onclick="deleteTask(${el.no})" value="Delete">
            </td>
          </tr>
        `;
      });
  
      document.getElementById("resultTodo").innerHTML = list.join("");
    }
  }
  
  function editTask(number) {
    showTodo(number);
  }
  
  function deleteTask(number) {
    listTodo = listTodo.filter((el) => {
      return el.no != number;
    });
  
    showTodo();
  }
  
  function cancel() {
    showTodo();
  }
  
  function save(number) {
    let index = listTodo.findIndex(el=> el.no == number)
  
    let location = document.getElementById("EditLocation").value;
    let task = document.getElementById("EditTask").value;
  
  
    listTodo[index] ={
      ...listTodo[index],
      location,
      task
    }
  
    showTodo()
  }
  
  showTodo();
  