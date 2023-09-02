let input = document.querySelector("#user_input");
let submit = document.querySelector("#submit")
let ol = document.querySelector("ol");
let arr = [];
function todoapp(e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please enter a task");
  } else {
    arr.push(input.value);
    input.value = ''
    ol.innerHTML = ""
    for (let i = 0; i<arr.length; i++) {
       const items = arr[i];
        //   console.log(items);
      ol.innerHTML += `<div class="li-div"><li class="todo-li"> <input class="check" type="checkbox">&nbsp ${items}  </li> <button class="del"  onclick="Delete(${i})">Delete</button> &nbsp <button class="edit" onclick="edit_task(${i})">Edit</button></div><hr> `;
    }
  }
}
function render(){
    ol.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        items = arr[i];
        //   console.log(items);
      ol.innerHTML += `<div class="li-div"><li class="todo-li"><input class="check" type="checkbox">&nbsp ${items} </li><button class="del" onclick="Delete(${i})">Delete</button> &nbsp<button class="edit" onclick="edit_task(${i})">Edit</button></div> <hr>`;
    }
}
function Delete(index){
    arr.splice(index, 1)
    render();
  
}
function edit_task(index){
    const edited = prompt("Edit:" , arr[index]) 
    if (edited !=="null"     ){
      // arr[index] = items 
      arr[index] = edited;
      render();
    
    }
    



}

